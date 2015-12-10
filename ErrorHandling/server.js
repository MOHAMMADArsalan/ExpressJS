/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var path = require("path");
var app = express();
var filePath = path.resolve(__dirname + "/download.jpg");
app.use(function (req, res, next, err) {
    if (err) {
        next(err);
    }
    else {
        next();
    }
});
// app.use(function(req,res){
// 	res.sendFile(filePath);
// });
app.use(function (err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(500);
        next(err);
    }
    else {
        next();
    }
});
app.get('/', function (req, res) {
    console.log("Hello Wrold");
    res.sendFile(filePath);
});
app.use(function (req, res) {
    res.status(404).send("<h1 style='color:red'>Page not found!!</h1>");
});
app.use(function (err, req, res, next) {
    res.send("Error: " + err);
});
app.listen(3000);
