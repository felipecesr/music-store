var autoprefixer = require('autoprefixer');

module.exports = function(gulp, config, plugins) {
  return function() {
    gulp.src('./src/scss/*.scss')
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({ includePaths : config.sassPaths }))
      .pipe(plugins.combineMq({ beautify: false }))
      .pipe(plugins.postcss([ autoprefixer(config.autoprefixer) ]))
      .pipe(plugins.cssnano({ zindex: false }))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/assets/css'));
  };
};