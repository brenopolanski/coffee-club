var gulp   = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('stylus', function() {
	return gulp.src('./src/styl/style.styl')
			.pipe(stylus())
			.pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['stylus'], function() {
	gulp.watch('./src/styl/style.styl', ['stylus']);
});
