var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/js/main.js',
    output: {
         path: path.resolve(__dirname, 'app/dist'),
         filename: 'main-bundle.js'
    },
    module: {
        loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 exclude: /node_modules/,
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
