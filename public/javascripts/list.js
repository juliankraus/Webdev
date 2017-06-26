(() => {
	let GoogleMapsLoader = require("./map");
	let xhr = require("./xmlHttpRequest");
	// init map
	GoogleMapsLoader.init();

	// request tracks
	xhr.requestTracks();

	module.exports.init = (tracks) => {
		// list
		let list = document.createElement("ul");
		list.setAttribute("id", "list");
		document.body.appendChild(list);

		let currentSize = Math.floor((window.innerHeight - document.getElementById("list").getBoundingClientRect().top) / 28);
		let index = 0;
		let total = Math.round(tracks.length / currentSize);
		let pl = document.getElementById("paginate left");
		let pr = document.getElementById("paginate right");

		// Buttons on click
		pl.onclick = slide.bind(this, -1);
		pr.onclick = slide.bind(this, 1);

		// init
		slide(0);

		// resize event listener
		window.addEventListener("resize", () => {
			currentSize = Math.floor((window.innerHeight - document.getElementById("list").getBoundingClientRect().top) / 28);
			total = Math.round(tracks.length / currentSize);

			slide(0);
		});

		// switch between pages
		function slide(offset) {
			index = Math.min(Math.max(index + offset, 0), total - 1);

			// display counter text
			document.getElementById("counter").innerHTML = (index + 1) + "/" + total;

			// build list
			createListItems(list, (currentSize * (index + 1)), currentSize * index, tracks);

			pr.setAttribute("data-state", index === 0 ? "disabled" : "");
			pl.setAttribute("data-state", index === total - 1 ? "disabled" : "");
		}
	};

	function createListItems(list, currentSize, index, tracks) {
		while (list.hasChildNodes()) {
			list.removeChild(list.firstChild);
		}

		for (let itemIndex = index; itemIndex < currentSize; itemIndex++) {
			if (itemIndex < tracks.length) {
				let listItem = document.createElement("li");

				listItem.textContent = tracks[itemIndex];

				listItem.setAttribute("id", itemIndex);

				// click event listener
				listItem.addEventListener("click", (event) => {
					xhr.requestJson(event);
				});

				if ((itemIndex + 1) % 2 === 0) {
					listItem.style.background = "white";
				}
				else {
					listItem.style.background = "lightgrey";
				}
				listItem.style.cursor = "pointer";

				list.appendChild(listItem);
			}
		}
	}
})();

