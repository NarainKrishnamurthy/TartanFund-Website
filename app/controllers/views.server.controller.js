'use strict';

var View = require('mongoose').model('View');

exports.list = function(req, res, next){
	View.find({}, function (err, views){
		if (err) {
			return next(err);
		} else {
			res.json(views);
		} 
	});
};

exports.listVisible = function(req, res, next){
	View.find({visibility: req.visibility}, function(err, views){
		if (err){
			return next(err);
		} else {
			res.json(views);
		}
	});
};

exports.viewsByVisibility = function (req, res, next, visibility){
	req.visibility = visibility;
	next();
};