//----------THIS IS THE BASE TO ALL YOUR SERVERS-----------

//store all of the express information into a variable
var express = require('express'); 

//build an app from the information by creating another variable 
var app = express();

//no need to npm install this, as it comes already when you install node
var http = require('http');

//create a server using the http module, using our app
http = http.Server(app);

//this says "whenever someone goes to my home page (the '/'), send them 'Hello ITP"
//the function will take in a request from the browser, and send out a response
app.get('/', function (req, res){
	res.send("Hello ITP")
})

//define another route
app.get('/about', function(req, res){
	res.send("ABOUT ITP")
})

//start listening at port 3000, and give back something (right now, a console message))
var server = http.listen(3000, function(){
	console.log('I am listening on port 3000')
})

//----------THIS IS THE BASE TO ALL YOUR SERVERS-----------