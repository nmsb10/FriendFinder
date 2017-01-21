// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
//tells node to use an "express" server
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//this means all static file references are assumed to start from the public folder
app.use(express.static(path.join(__dirname, 'app/public')));


//ROUTER
// "The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs."
//remember the path starts from the location of the server.js file
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);













//app.use('/css',  express.static(path.join(__dirname, 'app', 'public', 'css')));
// app.use('/css', express.static(path.join(__dirname + '/app/public/css')));
//app.use(express.static(__dirname + '/app/public'));

// app.get('/home', function(req,res) {
// 	res.sendFile(path.join(__dirname,'app/public/home.html'));
// });

// app.get('/survey', function(req,res) {
// 	res.sendFile('./app/public/survey.html');
// });

// app.get('/survey', function(req,res) {
// 	res.sendFile(path.join(__dirname,'app/public/survey.html'));
// });

// var server = app.listen(env.NODE_PORT || 8000, env.NODE_IP || 'localhost', function() {
// 	console.log('At the URL: http://localhost:8000');
// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});