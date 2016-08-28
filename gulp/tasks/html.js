module.exports = function(gulp, config, plugins) {
  return function() {
    gulp.src('./src/**/*.html')
      .pipe(plugins.plumber())
      .pipe(plugins.inlineSource())
      .pipe(plugins.htmlmin(config.html))
      .pipe(gulp.dest('./dist'));
  };
};