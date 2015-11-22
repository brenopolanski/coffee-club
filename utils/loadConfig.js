'use strict';

var fs = require('fs');

module.exports = function() {
	var config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
	for (var i in config) {
		config[i] = process.env[i.toUpperCase()] || config[i];
	}
	// console.log('Configuration');
	// console.log(config);
	return config;
};