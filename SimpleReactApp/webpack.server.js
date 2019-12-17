const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = env => {
    return{
    //mode:'production',
    devtool:'source-map',
    target: 'web',
    entry: {server: ['./src/app.js']},
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
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: {
                  loader: 'url-loader',
                },
              }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.join(__dirname, "src"),
        "node_modules"]
    }//,
    //externals: webpackNodeExternals()
}
}