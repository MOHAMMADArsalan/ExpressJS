/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
app.use(morgan("dev"));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.get('/', function (req, res) {
    res.render('index');
});
// app.get("/search", function(req, res, next) {
//      if(req.query.q === "javascript-themed-burrito"){
// 		 next();
// 		 return;
// 		 res.send("Hello World");
// 	 }
// 	 else if(req.query.q === "javascript"){
// 		 res.send("HEllo javascript");
// 	 }
// 	 else{
// 		 res.send("HEllo javascript");
// 	 }
// });
app.get("/search", function (request, response) {
    switch (request.query.q) {
        case "index.html":
            response.render("index1");
            break;
        case "app.css":
            response.render("app");
            break;
        default:
    }
});
app.use(function (request, response) {
    response.status(404).send("Page not found");
});
app.listen(9000, function () {
    console.log("App is");
});
