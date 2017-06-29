require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var seq = require('./db.js');
var User = seq.import('./models/user');

User.sync()

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));
//Creating a user
app.use('/api/user', require("./routes/user"));
// logging in a user
app.use('/api/login', require('./routes/session'));
//localhost:3000/api/login/
app.use('/api/definition', require('./routes/definition'));

app.use('/api/test', function(req, res){
	res.send("<h1>Hello World</h1>" +
			"<h2> it's a small world</h2>");
})

app.listen(3000, function(){
	console.log("app is open on 3000!");
})

//Challenge go to postman, create a new user, then login with that user