const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: `${__dirname}/dist/web/frontend`,
    publicPath: '/assets/'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'babel-loader'.
      {
        test: /\.(ts|tsx)?$/,
        loader: 'babel-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(eot|woff|woff2|ttf|pdf|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.png',
      filename: 'index.html',
      template: './public/index.ejs'
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    usedExports: true
  }
};
