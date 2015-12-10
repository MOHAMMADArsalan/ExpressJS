/// <reference path="./typings/tsd.d.ts" />
var q = require("q");
exports.generateRandomNum = function () {
    var num = Math.random();
    var deffered = q.defer();
    setTimeout(function () {
        deffered.resolve(num);
    }, 5000);
    return deffered.promise;
};
