var browserify = require('browserify');
var gulp = require('gulp');
var concat = require('gulp-concat');
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

gulp.task('bowerJS', function () {
	return gulp.src(lib.ext('js').files)
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
	return gulp.src(lib.ext('css').files)
	.pipe(concat('vendor.css'))
	.pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);