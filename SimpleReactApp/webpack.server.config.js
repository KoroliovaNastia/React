const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode:'development',
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: [webpackNodeExternals]
}