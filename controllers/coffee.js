'use strict';

var dateFormat = require('dateformat');
var now        = new Date();

module.exports = function(app) {
	var UserModel = app.models.user;

	var CoffeeController = {
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
		},

		create_guest: function(req, res) {
			var _id = req.session.user;
			UserModel.findById(_id, function(err, user) {
				var coffeeGuest = {
					amount: '1',
					date: dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
				};
				var coffeeGuests = user.guests;
				coffeeGuests.push(coffeeGuest);
				user.save(function() {
					res.redirect('/home');
				});
			});
		},
	};

	return CoffeeController;
};