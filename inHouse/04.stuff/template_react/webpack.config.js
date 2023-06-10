'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    devServer: {
        static: './public',
        host: 'localhost',
        port: 5173
    }
};