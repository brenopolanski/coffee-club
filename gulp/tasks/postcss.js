'use strict';

// Necessary plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var csswring     = require('csswring');
var paths        = require('../paths');

// Call PostCSS
module.exports = gulp.task('postcss', function() {
	var processors = [
	    autoprefixer({ browsers: ['last 3 versions'] }),
	    mqpacker,
	    csswring
    ];
	return gulp.src(paths.source.files.css)
		.pipe(plumber())
		.pipe(postcss(processors))
		.pipe(gulp.dest(paths.build.css));
});