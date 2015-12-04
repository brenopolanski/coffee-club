'use strict';

module.exports = function(app) {
	var db     = require('../libs/db_connect')();
	var Schema = require('mongoose').Schema;

	var coffee = Schema({
		amount : { type: String },
		date   : { type: String, required: true }
	});

	var guest = Schema({
		amount : { type: String },
		date   : { type: String, required: true }
	});

	var user = Schema({
		name            : { type: String, required: true },
		email           : { type: String },
		company         : { type: String },
		blog            : { type: String },
		location        : { type: String },
		github_id       : { type: String, required: true },
		github_username : { type: String, required: true, index: { unique: true } },
		profile_image   : { type: String, required: true },
		github_url      : { type: String, required: true },
		date            : { type: String, required: true },
		coffees         : [coffee],
		guests          : [guest]
	});

	return db.model('users', user);
};