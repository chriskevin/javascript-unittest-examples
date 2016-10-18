'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'app/main.entry.js'),
        vendor: path.resolve(__dirname, 'app/vendor.js')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015'],
                    plugins: []
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
          'vendor', 'vendor.js', Infinity
        )
    ],

    devtool: 'cheap-source-map'
};
