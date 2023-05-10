const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js:'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: path.resolve(__dirname, 'drop-console.js')
        }]
    }
}