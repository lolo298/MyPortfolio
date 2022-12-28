var express = require("express");
var router = express.Router();
const fs = require("fs");
require("dotenv").config();

/* GET home page. */
router.get('/robots.txt', function (req, res, next) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});
router.get("/", function (req, res, next) {
  console.log(req.app.get("env"));
  res.render("index", { title: "Lorenzo Aoulini | Portfolio", dev: process.env.MODE });
});

module.exports = router;
