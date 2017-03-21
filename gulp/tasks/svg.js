module.exports = function(gulp, config, plugins) {
  return function() {
    gulp.src('src/img/**/*.svg')
    .pipe(plugins.imagemin())
    .pipe(plugins.svgstore({ inlineSvg: true }))
    .pipe(plugins.rename({ basename: 'icons' }))
    .pipe(plugins.cheerio({
      run: function ($, file) {
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest('./dist/assets/img/'));
  };
};