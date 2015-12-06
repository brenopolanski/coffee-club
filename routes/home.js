'use strict';

module.exports = function(app) {
	var checkSession = require('./../middlewares/checksession');
	var home = app.controllers.home;
	app.get('/home', home.index);
	app.get('/exit', checkSession, home.logout);
};