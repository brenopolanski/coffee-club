'use strict';

module.exports = function(app) {
	var coffees = app.controllers.coffees;
	// change for "post" after
	// app.post('/coffee/:id', coffees.create);
	app.get('/coffee/:id', coffees.create);
};