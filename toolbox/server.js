var express = require('express');
var app = express();
var bodyParser = require('body-parser');
/*
*	Documentation for http node module
*	https://nodejs.org/api/http.html
*/
var http = require('http').Server(app);
var request = require('request');


// Helper Objects
var MainHelper = require("./routes/helpers/main_helper.js");

app.use(bodyParser.json());
// Load main routes into app
require('./routes/main')(app, request, MainHelper);

 
http.listen(3000,function(){
    console.log("Connected & Listen to port 3000 Internally");
});
