const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  devServer: {
    historyApiFallback: true,
  },
  // context: path.join(__dirname, 'src'),
  // historyApiFallback: true,
  entry: './src/app.js',

  output: {
    chunkFilename: '[id].result.js',
    crossOriginLoading: "anonymous",
    filename: 'result.js',
    path: path.join(__dirname, 'dist/'),
  },

  devtool: env.NODE_ENV === 'production' ? 'none' : 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'src'),
      'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loaders: ['eslint'],
    //     include: [
    //       path.resolve(__dirname, 'src'),
    //     ],
    //   },
    // ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
    }),
  ],
});
