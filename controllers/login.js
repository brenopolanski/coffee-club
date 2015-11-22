'use strict';

var loadConfig = require('../utils/loadConfig');

module.exports = function(app) {
	var LoginController = {
		index: function(req, res) {
			var config = loadConfig();
			var url = 'https://github.com/login/oauth/authorize?client_id=' + config.oauth_client_id + '&redirect_uri=' + config.oauth_redirect_uri + '&scope=' + config.oauth_scope + '';
			var params = {
				url: url
			};
			res.render('login/index', params);
		}
	};

	return LoginController;
};