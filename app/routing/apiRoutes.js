//LOAD DATA
//link our routes to the data source(s)
//here, that is friends.js
var friends = require('../data/friends.js');

//ROUTING
module.exports = function(app){
  //A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //API POST requests
  //A POST routes /api/friends. This will be used to handle incoming survey results.
  //When a user submits the form (thus submitting data to the server)
  //The JSON is pushed to the friends array.

  // get friends - takes in JSON input
  //So, the user completes the survey. This data is sent to the server.
  //Then the server posts this data to the friends array
  app.post("/api/friends", function(request, response) {
    var newfriend = request.body;
    console.log('new friend: ', newfriend);
    friends.push(newfriend);
    //could also instead write friends.push(request.body);
    //response.json(newfriend);
    response.json(true);
    //response.end();
  });

  app.post("/survey", function(request, response) {
    var newfriend = request.body;
    console.log('new friend: ', newfriend);
    friends.push(newfriend);
    //could also instead write friends.push(request.body);
    //response.json(newfriend);
    response.json(true);
    //response.end();
  });


};