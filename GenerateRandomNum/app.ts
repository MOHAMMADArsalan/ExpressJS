/// <reference path="./typings/tsd.d.ts" />
import express = require("express");
import Random = require("./random");
let app =express();

app.get("/" ,function(request ,response){
	 Random.generateRandomNum().then(function(generateRandomNum){
		 response.send("The random number is " + generateRandomNum);
	 })
});
app.listen(9000)