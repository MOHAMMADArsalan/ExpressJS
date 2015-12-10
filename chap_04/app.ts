/// <reference path="./typings/tsd.d.ts" />
import express  =require("express");
import morgan = require("morgan")
import path = require("path");
import fs = require("fs");
let app = express();

app.use(morgan("short"));
let filePath = path.join(__dirname ,"static");
app.use(express.static(filePath));
app.use(function(request ,response){
	response.statusCode = 404;
	response.send("Page not found");
});

app.listen(9000 , function(err){
	if(err){
		console.log("Error: "+ err);
		return;
	}
	console.log("Server is started");
})