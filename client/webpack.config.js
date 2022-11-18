const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //this is for images
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
  //this is to insert CSS into the Js bundle.js
      {
        test: /\.css$/i,
        //This must be in this order or webpack will throw errors
        use: ['style-loader', 'css-loader'],
      },
      {
//This is for babel-loader
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      })
    ]
};