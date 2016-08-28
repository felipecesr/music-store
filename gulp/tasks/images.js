module.exports = function(gulp, config, plugins) {
  return function() {
    gulp.src('src/img/**/*.{jpg,png,gif}')
    .pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/assets/img/'));
  };
};