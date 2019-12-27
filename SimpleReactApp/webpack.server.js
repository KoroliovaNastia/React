const path = require('path');

module.exports = (env) => ({
  // mode:'production',
  devtool: 'source-map',
  target: 'web',
  entry: { server: ['./src/serverApp.js'] },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(css)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        use: [
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader/locals',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'src'),
      'node_modules'],
  },
});
