const path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: {
        'javascripts/build.js': './src/index.jsx',
    },
    output: {
        filename:'[name]',
        path: path.join(__dirname,'public'),
    },
    resolve:{
        extentions: ['.js','.jsx'],
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader:'babel-loader',
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader:'json-loader',
            },
        ],
    },
};
