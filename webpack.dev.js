'use strict'
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
     contentBase: './dist',
     port: 7000,
     hot: true
   },
   module: {
       rules: [
        {
            test: /.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
       ]
   }
 });