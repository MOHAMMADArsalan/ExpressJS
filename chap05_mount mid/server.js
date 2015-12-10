/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var morgan = require("morgan");
var api_Router = require("./appRouter");
var path = require("path");
var app = express();
app.use(morgan("dev"));
app.get("/", function (request, response) {
    response.send("Welcome to home page");
});
app.use("/api", api_Router);
app.listen(9000, function (err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("App is started");
});
