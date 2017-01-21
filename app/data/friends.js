
var people = [];
var Person = function(name, photoLink, scores){
	this.name = name;
	this.photo = photoLink;
	this.scores = scores;
};

var firstGuy = new Person('jon', 'image.jpg', [4, 3, 2, 5, 2]);
people.push(firstGuy);
module.exports = people;

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