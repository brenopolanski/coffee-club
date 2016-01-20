'use strict';

var dateFormat = require('dateformat');
var now        = new Date();

module.exports = function(app) {
  var UserModel = app.models.user;
  var addCoffee = function(req, res, coffeeList) {
    var _id = req.session.user;
    var amount = req.query.amount;
    if (!amount || isNaN(amount) || Number(amount) < 1) {
      // TODO: let amount to be an integer.
      amount = '1';
    }

    UserModel.findById(_id, function(err, user) {
      var coffee = {
        amount: amount,
        date: dateFormat(now, 'dd-mmmm-yyyy')
      };
      var coffees = coffeeList(user);
      coffees.push(coffee);
      user.save(function() {
        res.redirect('/home');
      });
    });
  };

  var CoffeeController = {
    create: function(req, res) {
      addCoffee(req, res, function(user) {
        return user.coffees;
      });
    },
    create_guest: function(req, res) {
      addCoffee(req, res, function(user) {
        return user.guests;
      });
    }
  };

  return CoffeeController;
};