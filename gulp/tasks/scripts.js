module.exports = function(gulp, config, plugins) {
  return function() {
    gulp.src('./src/js/**/*.js')
      .pipe(plugins.plumber())
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('./dist/assets/js'));
  };
};