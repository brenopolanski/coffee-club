'use strict';

var Github     = require('github-api');
var dateFormat = require('dateformat');
var loadConfig = require('../utils/loadConfig');
var config     = loadConfig();
var now        = new Date();

module.exports = function(app) {
	var UserModel = app.models.user;

	var HomeController = {
		index: function(req, res) {
			var github = new Github({
				token: req.session.token,
				auth: 'oauth'
			});
			var userGithubAPI = github.getUser();

			userGithubAPI.show(null, function(err, data) {
				if (err) {
					res.redirect('/');
				}
				else {
					var query = { github_id: data.id };
					var amount = 0;
					var month = dateFormat(now, 'mmmm');

					UserModel.findOne(query)
						.select('github_id name github_username profile_image coffees')
						.exec(function(err, user) {
							if (user) {
								if (config.members.indexOf(user.github_username) !== -1) {
									var date;

									for (var i = 0; i < user.coffees.length; i++) {
										var coffee = user.coffees[i];
										date = coffee.date;
										date = date.split('-')[1];

										if (date === month) {
											amount += Number(coffee.amount);
										}
									}

									user.month = month;
									user.amount = Math.round(amount);

									req.session.user = user._id;
									res.render('home/index', user);
								}
								else {
									res.redirect('/');
								}
							}
							else {
								var userData = {
									name            : data.name || data.login,
									email           : data.email,
									company         : data.company,
									blog            : data.blog,
									location        : data.location,
									github_id       : data.id,
									github_username : data.login,
									profile_image   : data.avatar_url,
									github_url      : data.html_url,
									date            : dateFormat(now, 'dd-mmmm-yyyy')
								};

								UserModel.create(userData, function(err, user) {
									if (err) {
										res.redirect('/');
									}
									else {
										if (config.members.indexOf(user.github_username) !== -1) {
											user.month = month;
											user.amount = amount;

											req.session.user = user._id;
											res.render('home/index', user);
										}
										else {
											res.redirect('/');
										}
									}
								});
							}
						});
				}
			});
		},

		logout: function(req, res) {
			req.session.destroy();
			res.redirect('/');
		}
	};

	return HomeController;
};