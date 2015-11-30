'use strict';

module.exports = function(app) {
	var checkSession = require('./../middlewares/checksession');
	var coffee = app.controllers.coffee;
	app.get('/coffee/:id', checkSession, coffee.create);
	app.get('/coffee/guest/:id', checkSession, coffee.create_guest);
};