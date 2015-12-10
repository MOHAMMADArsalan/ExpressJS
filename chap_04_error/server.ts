/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import morgan = require("morgan");
let app = express();

app.use(morgan("dev"));

app.use(function(request : express.Request,response : express.Response,next){
	if(request.url === "/"){
		next();
	}
	else if(request.url === "/throw"){
		next(new Error("Gimme that Error"));
	}
	else {
		next("you did not visit root page");
	}
});
app.use(function(request , response){
	response.send("Welcome to home page");
});

app.use(function(err : any ,request : express.Request , response: express.Response ,next: Function){
      console.log(err);
	  response.status(500);
	response.send("Got an Error: "  + err);
});
// app.use(function(err : any ,request :express.Request , response : express.Response , next : Function){
	
// });

app.listen(9000 ,function(err){
	if(err){
		console.log("Error: " + err);
		return;
	}
	console.log("app is started");
});