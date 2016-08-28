var bowerDir = './vendor/';

module.exports = {
  html : { collapseWhitespace: true },
  sassPaths : [
    bowerDir + 'bootstrap-sass/assets/stylesheets',
    bowerDir + 'owlcarousel/owl-carousel'
  ],
  autoprefixer : {
    browsers: ['last 2 versions', 'Android >= 4', 'IE >= 9']
  }
};