'use strict';
var MenuItem = require('mongoose').model('MenuItem');

exports.create = function(req, res, next) {
	var menuItem = new MenuItem(req.body);

	menuItem.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(menuItem);
		}
	});
};

exports.list = function(req, res, next){
	MenuItem.find({}, function (err, menuItems){
		if (err) {
			return next(err);
		} else {
			res.json(menuItems);
		} 
	});
};

exports.listVisible = function(req, res, next){
	MenuItem.find({visibility: req.visibility}, function(err, menuItems){
		if (err){
			return next(err);
		} else {
			res.json(menuItems);
		}
	});
};

exports.menuItemsByVisibility = function (req, res, next, visibility){
	req.visibility = visibility;
	next();
};
