const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract(
                    ['css-loader', 'sass-loader']
                )
            }
        ]
    },
    devServer: {
        contentBase: path.resolve('client')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
