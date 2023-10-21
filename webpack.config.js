// configuration file for webpack

// get dependencies
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  // mode: process.env.NODE_ENV
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}