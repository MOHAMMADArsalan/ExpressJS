/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
app.use(morgan("short"));
var filePath = path.join(__dirname, "static");
app.use(express.static(filePath));
app.use(function (request, response) {
    response.statusCode = 404;
    response.send("Page not found");
});
app.listen(9000, function (err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("Server is started");
});
