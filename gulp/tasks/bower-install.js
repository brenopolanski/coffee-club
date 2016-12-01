'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var bower   = require('gulp-bower');
var paths   = require('../paths');

// Call Bower
gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(paths.source.bowerDir));
});

// Call Font Awesome
gulp.task('fontAwesome', ['bower'], function() {
	gulp.src(paths.source.bowerDir + '/font-awesome/css/font-awesome.min.css')
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.css));
	gulp.src(paths.source.bowerDir + '/font-awesome/fonts/**.*')
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.fonts));
});

// Call jQuery
gulp.task('jquery', ['bower'], function() {
	gulp.src(paths.source.bowerDir + '/jquery/dist/jquery.min.js')
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.js));
});

// Call Notie
gulp.task('notie', ['bower'], function() {
	gulp.src(paths.source.bowerDir + '/notie/notie.js')
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.js));
});

// Call Bower Install
module.exports = gulp.task('bower-install',
	['bower', 'fontAwesome', 'jquery', 'notie']);
