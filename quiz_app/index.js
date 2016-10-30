//----------THIS IS THE BASE TO ALL YOUR SERVERS-----------

//store all of the express information into a variable
var express = require('express'); 

//build an app from the information by creating another variable 
var app = express();

//no need to npm install this, as it comes already when you install node
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');

//create a server using the http module, using our app
http = http.Server(app);

var mongoose = require('mongoose')
//connect to the database
mongoose.connect("mongodb://hello:hello@ds019976.mlab.com:19976/webworkshop")
//check that your connection actually works
var db = mongoose.connection;

db.on('open', function(){
	console.log("I have connected to the database")
})

var Schema = mongoose.Schema;

//name it whatever field + schema you want to create
var userSchema = new Schema({
	name: {
		type: String,
		trim: true //trim extra spaces or blank white space so that you only save the content of your text
	}
	// email: {
	// 	type: String,
	// 	trim: true
	// }
})

//create a collection (blank table) using a particular Schema 
var User = mongoose.model('User', userSchema)

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

//view is what the user will view (what is viewable)
//tell it where to pick up and find the directory to be able to access and render
//the path.join name is the currect directory name and it's
//appending it to beginning of the folder you've named views 
app.set('views', path.join(__dirname, 'views'))

//the view engine we're gonna use to render these out, it's called 'pug'
//you don't need to require pug separately as a module though. Express knows
//where to pull pug from 
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

//this says "whenever someone goes to my home page (the '/'), send them 'Hello ITP"
//the function will take in a request from the browser, and send out a response
app.get('/', function (req, res){
	// res.send("<h1>HELLO ITP</h1>")

	//get name from database, add first and last, set it to a variabl
	//assing it to an object and pass that variable to the template
	//have the page spit it back out 
	var name = "Paula"

	res.render("index.pug", {myname:name});
})

app.get('/user', function(req, res){
	
	//save a user to the database
	var newUser = new User ({
		name: "abhishek"

	})

	newUser.save(function(err, result){

		if (err){
			console.log(err)
			res.send("Error saving your name")
		} else {
			res.send("Saved to database!")
		}
	})

})

app.get('/filter', function(req, res){

	User.find({name: "paula"}, function(err, result){
		
		return res.json(
			{
				data:result
			}
		)
	})
})

app.post('/newuser', function(req, res, next){

	//access the value that was sent to you in the form
	//req -- request from client to server
	//res -- response from server back to the client

	var newname = req.body.username 

	//create a new user with whatever we just received from req.body.username
	var newuser = new User ({
		name: newname
	})

	newuser.save (function(err, result){
		if (err){
			ressend("could not save")
		} else {
			res.send("saved to database!")
		}
	})

})

app.get('/all', function(req, res){

	//show me all the currentl saved users

	//within the user, find everything
	User.find({}, function(err, results){

		if(err){
			res.send("cannot find anyone")
		}

		return res.json(
			{
				data: results
			}
		)
	})
})

//define another route
app.get('/about', function(req, res){
	// res.send("ABOUT ITP");

	var list = ["chris","leslie","paula","jenny"];
	var meeting = true;

	res.render("about.pug", {namelist: list, is_meeting_on: meeting});
})

//define another route
app.get('/contact', function(req, res){
	res.send("CONTACT PAGE")
})

//start listening at port 3000, and give back something (right now, a console message))
var server = http.listen(3000, function(){
	console.log('I am listening on port 3000')
})

//----------THIS IS THE BASE TO ALL YOUR SERVERS-----------