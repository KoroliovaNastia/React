const path = require('path');

module.exports = (NODE_ENV) => {
    return{
        context: path.join(__dirname, 'src'),

        entry: './index.js',

        output: {
            filename: 'result.js',
            path: path.join(__dirname, 'dist'),
        },

        devtool: NODE_ENV === 'production' ? 'none' : 'source-map',

        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [path.join(__dirname, "src"),
            "node_modules"]
        },

        resolveLoader: {
            modules: ["node_modules"]
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
        }
    }
};