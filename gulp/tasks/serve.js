module.exports = function(gulp, plugins) {
  var browserSync = require('browser-sync').create();
  return function() {
    browserSync.init({
      server: {
        baseDir: "./dist/"
      }
    });
  };
};