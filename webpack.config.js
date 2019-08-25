'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',

    entry: {
        main: path.resolve(__dirname, 'app/main.entry.js'),
        vendor: path.resolve(__dirname, 'app/vendor.js'),
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [],
                    },
                },
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.json'],
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            'vendor', 'vendor.js', Infinity
        ),
    ],

    devtool: 'cheap-source-map',
};
