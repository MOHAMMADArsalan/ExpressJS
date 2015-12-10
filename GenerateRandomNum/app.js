/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var Random = require("./random");
var app = express();
app.get("/", function (request, response) {
    Random.generateRandomNum().then(function (generateRandomNum) {
        response.send("The random number is " + generateRandomNum);
    });
});
app.listen(9000);
