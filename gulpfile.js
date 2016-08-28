var gulp = require('gulp'),
    config = require('./gulp/config'),
    plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./gulp/tasks/' + task)(gulp, config, plugins); 
}

// Serve
gulp.task('serve', getTask('serve'));

// HTML
gulp.task('html', getTask('html'));

// Sass
gulp.task('styles', getTask('styles'));

// Scripts
gulp.task('scripts', getTask('scripts'));

// Images
gulp.task('images', getTask('images'));

// SVG
gulp.task('svg', getTask('svg'));

// Watch
gulp.task('watch', function () {
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/scss/**/*.scss', ['styles']);
  gulp.watch('./src/**/*.js', ['scripts']);
});