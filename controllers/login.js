'use strict';

module.exports = function(app) {
	var LoginController = {
		index: function(req, res) {
			res.render('login/index');
		}
	};

	return LoginController;
};