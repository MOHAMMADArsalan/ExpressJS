/// <reference path="typings/tsd.d.ts" />
var express = require("express");
var path = require("path");
var app = express();
var filePath = path.resolve(__dirname + "/public");
app.use(express.static(filePath));
app.listen(3000, function (err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("Server is running on port 3000");
});
