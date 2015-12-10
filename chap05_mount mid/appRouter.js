/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var path = require("path");
var api = express.Router();
var publicPath = path.join(__dirname, "public");
api.use(function (request, response, next) {
    console.log("Hello from user middleware");
    next();
});
api.get("/user", function (request, response) {
    response.send("Welcome to user page");
});
api.get("/user/:name", function (request, response) {
    response.send("Name: " + request.params.name);
});
api.get("/user/:img", function (request, response) {
    response.sendFile(publicPath);
});
module.exports = api;
