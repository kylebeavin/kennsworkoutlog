var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var Definition = sequelize.import('../models/definition.js');
var Log = sequelize.import('../models/log.js');

router.post('/', function(req, res){
	var description = req.body.log.description;
	var result = req.body.log.result;
	var user = req.user;
	var definition = req.body.log.def;

	Log.create({
		description : description, 
		result : result, 
		owner : user.id, 
		def: definition
	}).then(
		function createSuccess(log){
			res.json({
				log: log, 
				message: "You created a log!!"});
		},
		function createError(err){
			res.send(500, err.message)
		}
	);
})

router.get('/', function(req, res){
	var userid = req.user.id;

	Log.findAll({ where: {owner: userid}}).then(
			function findAllSuccess(data){
				res.json(data)
			},
			function findAllError(err){
				res.send(500, err.message)
			}
		)
})


router.delete('/', function(req, res){
	var dataID = req.body.log.id;

	Log.destroy({ where: {id: dataID }}).then(
		function deleteLogSuccess(data){
			res.send("You removed a log!");
		},
		function deleteLogError(err){
			res.send(500, err.message)
		}
	)
})

router.get('/:id', function(req, res){
	var dataID = req.params.id;
	console.log(req.params)
	Log.findOne({ where: {id: dataID }}).then(
		function getSuccess(data){
			res.json(data)
		},

		function getError(err){
			res.send(500, err.message)
		}
	)
})

router.put('/', function(req,res){
	var description = req.body.log.description;
	var result = req.body.log.result; 
	var data = req.body.log.id;
	var definition = req.body.log.def;

	Log.update({ 
		description : description, 
		result : result, 
		def : definition
	}, {where: {id : data}}).then(
		function updateSuccess(updateData){
			res.json(updateData)
		},
		function updateError(err){
			res.send(500, err.message)
		}
	)
})

module.exports = router;
