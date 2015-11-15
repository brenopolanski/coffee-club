'use strict';

module.exports = function(app) {
	var AuthController = {
		index: function(req, res) {
			var code = req.url.match(/\?code=(.*)/)[1];
			res.send(code);
		}
	};

	return AuthController;
};