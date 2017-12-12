/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const webpack = require('webpack');
const config = require('./dist.conf');

// Webpack Production Settings - Minified
module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    filename: 'react-metismenu.min.js',
  }),
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});