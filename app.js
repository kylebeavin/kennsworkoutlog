var express = require('express');
var app = express();

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("<h1>Hello World</h1>" +
			"<h2> it's a small world</h2>");
})

app.listen(3000, function(){
	console.log("app is open on 3000!");
})