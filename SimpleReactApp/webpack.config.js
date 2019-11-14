const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return{
        //context: path.join(__dirname, 'src'),

        entry: './src/app.js',
        
        output: {
            filename: 'result.js',
            path: path.join(__dirname, 'dist'),
        },

        devtool: env.NODE_ENV === 'production' ? 'none' : 'source-map',

        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [path.join(__dirname, "src"),
            "node_modules"]
        },
        module: {
            rules: [
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader"
                  },
                }
              ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html",
                inject: "body"
            })
        ]
    }
};