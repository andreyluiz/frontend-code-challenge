const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssCssnext = require('postcss-cssnext');

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js',
  ],
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:8]',
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://api.mcmakler.de',
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
