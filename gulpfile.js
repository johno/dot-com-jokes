var gulp    = require('gulp');
var cssmin  = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var prefix  = require('gulp-autoprefixer');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');
var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');

gulp.task('css', function() {
  return gulp.src('css/c.css')
    .pipe(prefix("last 1 version", "> 1%", "ie 8"))
    .pipe(csslint())
    .pipe(cssmin())
    .pipe(rename('c.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
  return gulp.src('js/j.js')
    .pipe(jshint())
    .pipe(uglify())
    .pipe(rename('j.min.js'))
    .pipe(gulp.dest('js'))
})

gulp.task('default', ['js', 'css']);
