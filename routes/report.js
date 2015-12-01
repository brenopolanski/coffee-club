'use strict';

module.exports = function(app) {
	var checkSession = require('./../middlewares/checksession');
	var report = app.controllers.report;
	app.get('/report', checkSession, report.index);
};