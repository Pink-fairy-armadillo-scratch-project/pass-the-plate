// configuration file for webpack

// get dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
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
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
