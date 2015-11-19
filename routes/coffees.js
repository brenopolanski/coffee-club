'use strict';

module.exports = function(app) {
	var checkSession = require('./../middlewares/checksession');
	var coffees = app.controllers.coffees;
	// change for "post" after
	// app.post('/coffee/:id', coffees.create);
	app.get('/coffee/:id', checkSession, coffees.create);
	app.get('/coffee/guest/:id', checkSession, coffees.create_guest);
};