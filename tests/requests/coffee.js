'use strict';

var server  = require('../../server');
var should  = require('should');
var request = require('supertest')(server);

describe('The coffee controller', function() {
	describe('User not logged in', function() {
		describe('Must to go for route /', function() {
			it('when doing GET /coffee/5660adb186ff8a5d6bcee1d3', function(done) {
				request.get('/coffee/5660adb186ff8a5d6bcee1d3')
				.end(function(err, res) {
					res.headers.location.should.eql('/');
					done();
				});
			});

			it('when doing GET /coffee/guest/5660adb186ff8a5d6bcee1d3', function(done) {
				request.get('/coffee/guest/5660adb186ff8a5d6bcee1d3')
				.end(function(err, res) {
					res.headers.location.should.eql('/');
					done();
				});
			});
		});
	});
});