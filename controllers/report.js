'use strict';

var dateFormat = require('dateformat');
var now        = new Date();

module.exports = function(app) {
  var UserModel = app.models.user;

  var ReportController = {
    index: function(req, res) {
      var _id = req.session.user;
      UserModel.findById(_id, function(err, user) {
        var amount = 0;
        var month = dateFormat(now, 'mmmm');
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

        res.render('report/index', user);
      });
    }
  };

  return ReportController;
};