/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const browserConfig = {
  entry: [
    'webpack-hot-middleware/client',
    './client/index.jsx',
  ],
  output: {
    path: path.resolve('dist/assets'),
    publicPath: '/assets',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.scss$/,
        loader: ExtractTextPlugin.extract(
          ['css-loader', 'sass-loader'],
        ),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    contentBase: path.resolve('client/'),
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};

module.exports = browserConfig;

