/**
 * Created by shenwudi on 2017/9/24.
 */
const path = require('path');

module.exports = {
    entry: {
        index: ['./src/main.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};