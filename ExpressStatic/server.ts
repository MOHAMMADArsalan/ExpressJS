/// <reference path="typings/tsd.d.ts" />
 import express = require("express");
 import path = require("path")
 
 let app =express();
 let filePath = path.resolve(__dirname + "/public")
 app.use(express.static(filePath));
 app.listen(3000 ,function(err){
	 if(err){
		 console.log("Error: " + err);
		 return;
	 }
	 console.log("Server is running on port 3000");
 })