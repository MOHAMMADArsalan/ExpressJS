/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import  morgan = require("morgan");
import api_Router = require("./appRouter");
let path = require("path");

let app =express();

app.use(morgan("dev"));

app.get("/" ,function(request ,response){
	response.send("Welcome to home page");
});

app.use("/api" , api_Router );
app.listen(9000 ,function(err){
	if(err){
		console.log("Error: " + err);
		return;
	}
	console.log("App is started");
});