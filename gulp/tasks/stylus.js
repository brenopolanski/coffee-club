'use strict';

// Necessary plugins
var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var stylus    = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var paths     = require('../paths');

// Call Stylus
module.exports = gulp.task('stylus', function() {
	return gulp.src(paths.source.files.styl)
		.pipe(plumber())
		.pipe(stylus())
		.pipe(minifycss())
		.pipe(gulp.dest(paths.build.app));
});