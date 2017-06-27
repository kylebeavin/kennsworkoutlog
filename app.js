var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var seq = require('./db.js');
var User = seq.import('./models/user');


User.sync()
app.use(bodyParser.json());


app.post('/api/user', function(req, res){
	var username = req.body.user.username
	var pass = req.body.user.password


	User.create({
		username : username,
		passwordhash :""
	}).then(
		function createSuccess(user){
			res.json({
				user : user,
				message: 'create'
			})
		},
		function createError(err){
			res.send(500, err.message)
		}

		)

})


app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("<h1>Hello World</h1>" +
			"<h2> it's a small world</h2>");
})

app.listen(3000, function(){
	console.log("app is open on 3000!");
})