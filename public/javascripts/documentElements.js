(() => {
// left button
	let paginateLeft = document.createElement("button");
	paginateLeft.setAttribute("id", "paginate left");
	paginateLeft.innerHTML = "<";

// right button
	let paginateRight = document.createElement("button");
	paginateRight.setAttribute("id", "paginate right");
	paginateRight.innerHTML = ">";

// button class
	let paginates = document.createElement("div");
	paginates.setAttribute("id", "btn");
	paginates.setAttribute("class", "paginates");
	paginates.appendChild(paginateLeft);
	paginates.appendChild(paginateRight);

// page counter
	let pageCounter = document.createElement("div");
	pageCounter.setAttribute("id", "counter");

// bar
	let bar = document.createElement("div");
	bar.setAttribute("id", "bar");
	bar.appendChild(paginates);
	bar.appendChild(pageCounter);
	document.body.appendChild(bar);

// chart
	let elevation = document.createElement("div");
	elevation.setAttribute("id", "elevation");
	document.body.appendChild(elevation);

// map
	let map = document.createElement("div");
	map.setAttribute("id", "map");
	document.body.appendChild(map);
})();
