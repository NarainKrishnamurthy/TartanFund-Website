// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(process.env.MONGOLAB_URI || config.db);

	require('../app/models/member.server.model');

	// Return the Mongoose connection instance
	return db;
};
