//DEPENDENCIES
var express = require("express");
// The path package gets the correct file path for the html
var path = require('path');

// ROUTING
module.exports = function(app) {
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	//remember: __dirname represents the location of THIS htmlRoutes.js file
	var thing = path.join(__dirname + "./../public/survey.html")
	console.log('suvery routes', thing)
	app.get("/survey", function(request, response) {
	  response.sendFile(path.join(__dirname + "./../public/survey.html"));
	});


	// Basic route that sends the user to the home page by default
	app.use(function(req, response) {
	  response.sendFile(path.join(__dirname + "./../public/home.html"));
	});
};
