var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('css', function() {
  gulp.src('src/simplegdpr.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS())
  .pipe(rename("simplegdpr.min.css"))
  .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
  gulp.src('src/simplegdpr.js')
  .pipe(uglify())
  .pipe(rename("simplegdpr.min.js"))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  console.log('Gulp running');
});