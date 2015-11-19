'use strict';

var dateFormat = require('dateformat');
var now        = new Date();

module.exports = function(app) {
	var UserModel = app.models.user;

	var CoffeesController = {
		create: function(req, res) {
			var _id = req.session.user;
			UserModel.findById(_id, function(err, user) {
				var coffee = {
					amount: '1',
					date: dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
				};
				var coffees = user.coffees;
				coffees.push(coffee);
				user.save(function() {
					res.redirect('/home');
				});
			});
		}
	};

	return CoffeesController;
};