/// <reference path="./typings/tsd.d.ts" />
import path = require("path");
import express = require("express");
import http = require("http");
import morgan = require("morgan");
import bodyParser = require("body-parser");

let app = express();
 //views
app.set("views" ,path.resolve(__dirname ,"views"));
app.set("view engine" ,"ejs")

let entries = [];
app.locals.entries = entries;
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended :false}));

//routing

app.get("/" ,function(request , response){
	 response.render("index");
});

app.get("/new-entry" , function(request , response){
	response.render("new-entry");
});

app.post("/new-entry" , function(request , response){
	if(!request.body.title || !request.body.content){
		response.status(400).send("Entries must have a title and content");
		return;
	}
	entries.push({
		title : request.body.title,
		content : request.body.content,
		published : new Date()
	});
	response.redirect("/");
});

app.use(function(request , response){
	response.status(404).render("404");
})
http.createServer(app).listen( 9000,function(){
	console.log("Guestbook is started is browser");
});