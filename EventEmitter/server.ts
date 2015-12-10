// /// <reference path="./typings/tsd.d.ts" />
// import express = require("express");
// import events = require("events");
// import fs = require("fs");
// var emitter = new events.EventEmitter();
// //  emitter.on('start_read' ,function(file_read){
// // 	 console.log("Started reading file...nn");
// // 	 fs.readFile(file_read, "utf-8" ,function(err ,data){
// // 		 if(err){
// // 			 emitter.emit("error" , "from_read");
// // 		 }else {
// // 			 console.log("Done Reading file...nn");
// // 			 emitter.emit("print_content" ,data);
// // 		 }
// // 	 });
// // });
// // emitter.on("print_content" ,function(data){
// // 	console.log("Printing content of file....nn");
// // 	console.log(data);
// // 	emitter.emit("done");
// // });

// // emitter.on('error' ,function(type){
// // 	console.log("Faced error while" + type);
// // 	emitter.emit("Done");
// // });
// // emitter.on("done" ,function(){
// // 	console.log("ok its done ?");
// // });
// // emitter.emit("start_read", "myfile.txt");

// // emitter.removeListener("print_content" ,function(){
// // 	console.log("Remove the listener");
// // });
// // emitter.removeAllListeners("start_read");


import events = require("events");

let emitter = new events.EventEmitter();

var listener1 = function(){
    console.log("listener1 executed");	
}

var listener2 = function (){
	console.log("listener2 executed");
}
emitter.addListener("connection",listener1);
emitter.on("connection" ,listener2);

var eventListeners = require("events").EventEmitter.listenerCount(emitter,"connection");
console.log( eventListeners + " Listner(s) listening to connection event");


emitter.emit('connection');
emitter.removeListener('connection', listener1);
console.log("listener1 will not listen now");
emitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(emitter,"connection");
console.log(eventListeners + "Listner(s) listening to connection event");
console.log("program end");