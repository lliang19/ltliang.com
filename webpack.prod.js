const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    main: './src/web/frontend/main.tsx'
  },

  mode: 'production'
});
