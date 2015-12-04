'use strict';

module.exports = function() {
	var mongoose = require('mongoose');
	var env_url = {
		'test': 'mongodb://localhost/coffeeclub_test',
		'development': 'mongodb://localhost/coffeeclub'
	};
	var url = 
		process.env.MONGOLAB_URI || 
		process.env.MONGOHQ_URL ||
		env_url[process.env.NODE_ENV || 'development'];

	return mongoose.connect(url, function(err, res) {
		if (err) { 
			console.log('ERROR connecting to: ' + url + '. ' + err);
		} 
		else {
			console.log('Succeeded connected to: ' + url);
		}
	});
};