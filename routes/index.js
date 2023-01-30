var express = require("express");
const session = require("express-session");
var router = express.Router();
const fs = require("fs");
require("dotenv").config();

/* GET home page. */
var mode = process.env.MODE;

router.get("/", function (req, res, next) {
  var lang = getLang(req);
  res.render("index", { title: "Lorenzo Aoulini | Portfolio", dev: mode, lang: lang });
});
router.get("/projects", function (req, res, next) {
  var lang = getLang(req);
  res.render("projects", {
    title: "Lorenzo Aoulini | Projects",
    dev: mode,
    lang: lang,
  });
});

router.get("/timeline", function (req, res, next) {
  var lang = getLang(req);
  res.render("timeline", {
    title: "Lorenzo Aoulini | Timeline",
    dev: mode,
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
