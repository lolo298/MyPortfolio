var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.app.get("env"));
  res.render("index", { title: "Lorenzo", dev: "prod" });
});

module.exports = router;
