const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(webpackConfig, {

  devtool: 'eval',

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    host: '0.0.0.0'
  }

})
