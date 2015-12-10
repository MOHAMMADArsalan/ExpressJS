/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var path = require("path");
var app = express();
var publicFiles = path.resolve(__dirname, "public");
var privateFiles = path.resolve(__dirname, "private");
app.use("/pri", express.static(privateFiles));
app.use(express.static(publicFiles));
app.listen(9000, function (err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("App is started");
});
//let filePath = path.resolve(__dirname+"/123.jpg")
// app.get("/",function(req ,res){
// 	res.sendFile(path.join(__dirname + "/public/images.jpg"));
// });
