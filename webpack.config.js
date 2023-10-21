// configuration file for webpack

// get dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    home: path.join(__dirname, 'src', 'home.jsx'),
    login: path.join(__dirname, 'src', 'loginRoot.jsx'),
  },
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      chunks: ['login'],
    })],
  devServer: {
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
