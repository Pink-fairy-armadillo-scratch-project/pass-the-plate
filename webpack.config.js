// configuration file for webpack

// get dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
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
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    port: 8080,
    proxy: {
      '/api/**': 'http://localhost:1234'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
