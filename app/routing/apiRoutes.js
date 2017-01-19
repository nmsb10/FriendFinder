//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
  var friends = req.people;
  res.json(friends);
});

var people = [];
var Person = function(name, photoLink, scores){
	this.name = name;
	this.photo = photoLink;
	this.scores = [];
};

// var Scores = function(a, b, c, d, e, f, g, h, i, j){
// 	this.q1 = a;
// 	this.q2 = b;
// 	this.q3 = c;
// 	this.q4 = d;
// 	this.q5 = e;
// 	this.q6 = f;
// 	this.q7 = g;
// 	this.q8 = h;
// 	this.q9 = i;
// 	this.q10 = j;
// };


//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to
//handle the compatibility logic.

// get friends - takes in JSON input
//this is the server side. So now the server is taking the person object data from ???.html
//this post request is describing what to do with the post request from ???.html
app.post("/api/friends", function(request, response) {
  var newfriend = request.body;
  console.log('new friend: ', newfriend);
  people.push(newfriend);
  response.json(newfriend);
  response.end();
});