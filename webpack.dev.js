const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';

module.exports = merge(common, {
  entry: {
    main: ['./src/web/frontend/main.tsx', hotMiddlewareScript]
  },

  mode: 'development',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
