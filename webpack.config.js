const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev')

const dirNode = 'node_modules'
const dirApp = path.join(__dirname, 'app')
const dirAssets = path.join(__dirname, 'assets')

const appHtmlTitle = 'Webpack Boilerplate'

/**
 * Webpack Configuration
 */
module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({
      parallel: true,
      cache: true
    }),
    new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  entry: {
    bundle: path.join(dirApp, 'index')
  },
  resolve: {
    modules: [
      dirNode,
      dirApp,
      dirAssets
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      title: appHtmlTitle,
      minify: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      inject: true
    }),
    new ResourceHintWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar()
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true
        }
      },

      // STYLES
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
              includePaths: [dirAssets]
            }
          }
        ]
      },

      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
}
