/// <reference path="./typings/tsd.d.ts" />

import q = require("q");

exports.generateRandomNum = function(){
		let num  = Math.random();
		let deffered = q.defer();
		setTimeout(function(){
			deffered.resolve(num)
			
		},5000)

     return deffered.promise;
}