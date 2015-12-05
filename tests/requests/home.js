'use strict';

var server  = require('../../server');
var should  = require('should');
var request = require('supertest')(server);

describe('The home controller', function() {
	it('Must return status 200 when doing GET', function(done) {
		request.get('/')
		.end(function(err, res) {
			res.status.should.eql(200);
			done();
		});
	});

	it('Must to go for route / when doing GET /exit', function(done) {
		request.get('/exit')
		.end(function(err, res) {
			res.headers.location.should.eql('/');
			done();
		});
	});
});