var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
    var trier = {
        lat: 49.749992,
        long: 6.6371433,
        zoom: 13
    };

    // now we use the templating capabilities of express and call our template to render the view, and pass a few parameters to it
    res.render("home", { title: "Hausarbeit", lat: trier.lat, lon: trier.long, zoom: trier.zoom });
});

module.exports = router;
