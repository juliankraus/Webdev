(() => {
	let list = require("./list");
	let GoogleMapsLoader = require("./map");
	let elevationChart = require("./elevationChart");

// send request for all tracks
	module.exports.requestTracks = function () {
		let request = new XMLHttpRequest();
		request.addEventListener("error", error => { console.error(error.toString()); });
		request.addEventListener("load", () => {
			if (request.status === 200) { list.init(request.response); }
		});
		request.open("GET", "/json/tracks");
		request.setRequestHeader("Accept", "application/json");
		request.responseType = "json";
		request.send();
	};

// send request for clicked json
	module.exports.requestJson = function (event) {
		let request = new XMLHttpRequest();
		request.addEventListener("error", error => { console.error(error.toString()); });
		request.addEventListener("load", () => {
			if (request.status === 200) {
				GoogleMapsLoader.loadGeoJson(request.response);
				elevationChart.init(request.response);
			}
		});
		request.open("GET", "/json/" + (parseInt(event.target.id) + 1));
		request.setRequestHeader("Accept", "application/json");
		request.responseType = "json";
		request.send();
	};
})();

