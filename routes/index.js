var express = require("express");
const session = require("express-session");
var router = express.Router();
const fs = require("fs");
require("dotenv").config();

/* GET home page. */

router.get("/", function (req, res, next) {
  var lang = getLang(req);
  console.log(lang);
  res.render("index", { title: "Lorenzo Aoulini | Portfolio", dev: process.env.MODE, lang: lang });
});
router.get("/projects", function (req, res, next) {
  var lang = getLang(req);
  console.log(lang);
  res.render("projects", {
    title: "Lorenzo Aoulini | Projects",
    dev: process.env.MODE,
    lang: lang,
  });
});
router.post("/lang", function (req, res, next) {
  req.session.lang = req.body.lang;
  res.send("ok");
});

function getLang(req) {
  if (!req.session.lang) req.session.lang = "fr";
  return req.session.lang;
}

module.exports = router;
