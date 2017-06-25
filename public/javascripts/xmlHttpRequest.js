(() => {
	let list = require("./list");
	let GoogleMapsLoader = require("./map");

// send request for all tracks
	module.exports.requestTracks = function () {
		let request = new XMLHttpRequest();
		request.addEventListener("error", error => { console.error(error.toString()); });
		request.addEventListener("load", () => {
			if (request.status === 200) { list.init(request.response); }
		});
		request.open("GET", "http://localhost:8080/json/tracks");
		request.setRequestHeader("Accept", "application/json");
		request.responseType = "json";
		request.send();
	};

// send request for all json
	module.exports.requestJson = function (event) {
		let request = new XMLHttpRequest();
		request.addEventListener("error", error => { console.error(error.toString()); });
		request.addEventListener("load", () => {
			if (request.status === 200) { GoogleMapsLoader.loadGeoJson(request.response); }
		});
		request.open("GET", "http://localhost:8080/json/" + (parseInt(event.target.id) + 1));
		request.setRequestHeader("Accept", "application/json");
		request.responseType = "json";
		request.send();
	};
})();

