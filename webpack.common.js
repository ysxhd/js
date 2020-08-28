const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        index: path.join(__dirname,'src/index.js')
        
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'index.js'
    },
    mode: 'production',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader:'url-loader',
                    options: {
                        limit:1024 * 1024,
                        name: 'imgs/[name].[hash].[ext]'
                    }
                }]
            }
        ]
    }
}