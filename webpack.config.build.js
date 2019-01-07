const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.config')

module.exports = merge(webpackConfig, {
  performance: {
    maxAssetSize: 170000,
    maxEntrypointSize: 300000,
    hints: 'warning'
  },
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]

})
