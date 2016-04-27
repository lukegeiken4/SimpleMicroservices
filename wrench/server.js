var express = require('express');
var app = express();

/*
*	Documentation for http node module
*	https://nodejs.org/api/http.html
*/
var http = require('http').Server(app);
var request = require('request');


// Helper Objects
var MainHelper = require("./routes/helpers/main_helper.js");

// Load main routes into app
require('./routes/main')(app, request, MainHelper);
 
http.listen(3001,function(){
    console.log("Connected & Listen to port 3001 Internally");
});
