const createError = require("http-errors");
const express = require("express");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/robots.txt', function (req, res, next) {
  res.type('text/plain')
  res.send("User-agent: *\nAllow: /\nSitemap: https://lorenzoa.dev/sitemap.xml");
});
app.get('/sitemap.xml', function (req, res, next) {
  res.type('text/xml')
  fs.readFile("sitemap.xml", function (err, data) {
    res.send(data);
  });
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/", express.static(path.join(__dirname, "public")));

if(process.env.MODE !== "prod") {
  fs.readdirSync("./projects/web").forEach(function (dir) {
    app.use("/" + dir, require(path.join(__dirname + "/projects/web/"+dir+"/route.js")));
    //app.use("/" + dir, express.static(path.join(__dirname, "/projects/web/"+dir)));
    console.log("Loaded " + dir);
  })
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
