require('babel-register')({
  ignore: false,
  only: /.+(?:(?:\.js)|(?:.jsx))$/,
  extensions: ['.js'],
  sourceMap: true,
  presets: [
    'es2015',
  ],
  plugins: [
    'transform-object-rest-spread',
    'transform-async-to-generator',
    'transform-class-properties',
    'syntax-trailing-function-commas',
  ],
});

const Snoode = require('./index').default;
module.exports = new Snoode();
