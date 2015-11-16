'use strict';

var Github = require('github-api');

module.exports = function(app) {
	var HomeController = {
		index: function(req, res) {

			var github = new Github({
				token: app.token,
				auth: 'oauth'
			});

			var user = github.getUser();

			user.show(null, function(err, user) {
				if (err) {
					res.redirect('/');
				}
				else {
					req.session.user = user.login;
					res.render('home/index', user);
				}
			});

			// console.log(app.token);
		},

		logout: function(req, res) {
			app.token = null;
			req.session.destroy();
			res.redirect('/');
		}
	};

	return HomeController;
};