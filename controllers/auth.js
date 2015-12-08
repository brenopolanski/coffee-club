'use strict';

var authenticate = require('../utils/authenticate');

module.exports = function(app) {
	var AuthController = {
		index: function(req, res) {
			var code = req.url.match(/\?code=(.*)/)[1];
			res.redirect('/authenticate/' + code);
		},

		code: function(req, res) {
			authenticate(req.params.code, function(err, token) {
				var result = err || !token ? { 'error': 'bad_code' } : { 'token': token };

				if (result && result.token) {
					req.session.token = result.token;
					res.redirect('/home');
				}
				else {
					res.json(result);
				}
			});
		}
	};

	return AuthController;
};