let express = require("express");
let router = express.Router();
let fs = require("fs");

var obj = fs.readdirSync("public/json", "utf8");
var jsonFiles = [];

// copy json files from dir
obj.forEach(function (file) {
    jsonFiles.push(JSON.parse(fs.readFileSync("public/json/" + file, "utf8")));
});

// GET home page and render json
router.get("/", function (req, res) {
    res.render("home", { data: jsonFiles });
});

module.exports = router;
