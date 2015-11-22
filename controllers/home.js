'use strict';

var Github     = require('github-api');
var dateFormat = require('dateformat');
var now        = new Date();

module.exports = function(app) {
	var UserModel = app.models.user;

	var HomeController = {
		index: function(req, res) {
			var github = new Github({
				token: app.token,
				auth: 'oauth'
			});
			var userGithubAPI = github.getUser();

			userGithubAPI.show(null, function(err, data) {
				if (err) {
					res.redirect('/');
				}
				else {
					var query = { github_id: data.id };

					UserModel.findOne(query)
						.select('github_id name profile_image coffees')
						.exec(function(err, user) {
							if (user) {
								req.session.user = user._id;
								res.render('home/index', user);
							}
							else {
								var userData = {
									name            : data.name,
									email           : data.email,
									company         : data.company,
									blog            : data.blog,
									location        : data.location,
									github_id       : data.id,
									github_username : data.login,
									profile_image   : data.avatar_url,
									github_url      : data.html_url,
									date            : dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
								};

								UserModel.create(userData, function(err, user) {
									if (err) {
										res.redirect('/');
									}
									else {
										req.session.user = user._id;
										res.render('home/index', user);
									}
								});
							}
						});
				}
			});
		},

		logout: function(req, res) {
			app.token = null;
			req.session.destroy();
			res.redirect('/');
		}
	};

	return HomeController;
};