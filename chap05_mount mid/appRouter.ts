/// <reference path="./typings/tsd.d.ts" />
import express = require("express");
import path = require("path")
let api = express.Router();
 let publicPath = path.join(__dirname ,"public");
 api.use(function(request, response, next){
	 console.log("Hello from user middleware");
     next(); 
});
api.get("/user" ,function(request ,response){
	response.send("Welcome to user page");
});
api.get("/user/:name" ,function(request ,response){
	response.send("Name: " + request.params.name);
});
api.get("/user/:img", function(request ,response){
	response.sendFile(publicPath);
})
module.exports = api;