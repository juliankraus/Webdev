let express = require("express");
let router = express.Router();
let path = require("path");
let fs = require("fs");

// GET homepage
router.get("/", (req, res) => {
	res.render("home");
});

// GET json tracks by id
router.get("/json/tracks/:id", (req, res) => {
	res.send(JSON.parse(fs.readFileSync(path.join("public", "json", req.params.id + ".json"))).features[0].properties.name);
});

// GET all json tracks
router.get("/json/tracks", (req, res) => {
	let tmp = fs.readdirSync(path.join("public", "json"), "utf8");
	let json = [];

	for (let i = 0; i < tmp.length; i++) {
		json.push(JSON.parse(fs.readFileSync(path.join("public", "json", (i + 1) + ".json"))).features[0].properties.name);
	}

	res.json(json);
});

// GET json by id
router.get("/json/:id", (req, res) => {
	res.sendFile(path.resolve(path.join("public", "json", req.params.id + ".json")));
});

// GET all json
router.get("/json", (req, res) => {
	let tmp = fs.readdirSync(path.join("public", "json"), "utf8");
	let json = [];

	for (let i = 0; i < tmp.length; i++) {
		json.push(JSON.parse(fs.readFileSync(path.join("public", "json", (i + 1) + ".json"))));
	}

	res.json(json);
});

module.exports = router;
