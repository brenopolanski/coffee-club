'use strict';

var app     = require('../../app');
var should  = require('should');
var request = require('supertest')(app);

describe('No controller home', function() {
	it('Must return status 200 when doing GET', function(done) {
		request.get('/')
			.end(function(err, res) {
				res.status.should.eql(200);
		});
	});
});