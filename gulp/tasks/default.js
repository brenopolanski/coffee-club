'use strict';

// Necessary plugins
var gulp = require('gulp');

// Call Default
module.exports = gulp.task('default', ['stylus', 'bower-install', 'watch']);
