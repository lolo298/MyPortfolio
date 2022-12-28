var express = require("express");
var router = express.Router();
const fs = require("fs");
require("dotenv").config();

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Lorenzo Aoulini | Portfolio", dev: process.env.MODE });
});
router.get("/index.html", function (req, res, next) {
  res.render("index", { title: "Lorenzo Aoulini | Portfolio", dev: process.env.MODE });
});

module.exports = router;
