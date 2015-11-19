'use strict';

module.exports = function(app) {
	var Schema = require('mongoose').Schema;

	var coffee = Schema({
		amount : { type: Integer },
		flavor : { type: String },
		date   : { type: String, required: true }
	});

	var guest = Schema({
		amount : { type: Integer },
		flavor : { type: String },
		date   : { type: String, required: true }
	});

	var usuario = Schema({
		name            : { type: String, required: true },
		email           : { type: String, required: true, index: { unique: true } },
		company         : { type: String },
		blog            : { type: String },
		location        : { type: String },
		github_id       : { type: String, required: true },
		github_username : { type: String, required: true },
		profile_image   : { type: String, required: true },
		github_url      : { type: String, required: true },
		date            : { type: String, required: true },
		coffees         : [coffee],
		guests          : [guest]
	});

	return db.model('usuarios', usuario);
};