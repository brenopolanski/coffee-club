'use strict';

module.exports = function() {
	var mongoose = require('mongoose');
	var config   = require('../config.json');
	var env = 
		process.env.MONGOLAB_URI || 
		process.env.MONGOHQ_URL ||
		process.env.NODE_ENV || 'development';
	var url = config.mongodb[env];
	var singleConnection;

	if (!singleConnection) {
		singleConnection = mongoose.connect(url, function(err, res) {
			if (err) { 
				console.log('ERROR connecting to: ' + url + '. ' + err);
			} 
			else {
				console.log('Succeeded connected to: ' + url);
			}
		});
	}

	return singleConnection;
};