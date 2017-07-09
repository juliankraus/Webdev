(() => {
	let GoogleMapsLoader = require("google-maps");
	// options
	GoogleMapsLoader.KEY = "AIzaSyCFDRNsKcoDdX1az69E7DThJYvzsAekkq0";
	GoogleMapsLoader.LIBRARIES = ["geometry", "places"];

	module.exports.init = function () {
		GoogleMapsLoader.load((google) => {
			//set up map
			GoogleMapsLoader.MAP = new google.maps.Map(document.getElementById("map"), {
				center: new google.maps.LatLng(49.749992, 6.6371433),
				zoom: 13,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			// load geojson on map
			module.exports.loadGeoJson = (json) => {
				GoogleMapsLoader.MAP.data.forEach((feature) => {
					GoogleMapsLoader.MAP.data.remove(feature);
				});

				GoogleMapsLoader.MAP.data.addGeoJson(json);
				zoom(GoogleMapsLoader.MAP);
			};

			// zoom
			function zoom(map) {
				var bounds = new google.maps.LatLngBounds();
				map.data.forEach(function (feature) {
					processPoints(feature.getGeometry(), bounds.extend, bounds);
				});
				map.fitBounds(bounds);
			}

			// process points
			function processPoints(geometry, callback, thisArg) {
				if (geometry instanceof google.maps.LatLng) {
					callback.call(thisArg, geometry);
				}
				else if (geometry instanceof google.maps.Data.Point) {
					callback.call(thisArg, geometry.get());
				}
				else {
					geometry.getArray().forEach(function (g) {
						processPoints(g, callback, thisArg);
					});
				}
			}
		});
	};
})();

