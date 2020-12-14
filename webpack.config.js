const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const combineLoaders = require('webpack-combine-loaders');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HotModuleReplacementPlugin = require('hot-module-replacement');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|gif|jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader',
          options: { 
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        },
      },
      {
        test: /\.(mp4|mov|m4p|avi|webm|ogg|mpg|mp2)$/,
        use: {
          loader: 'url-loader',
          options: { 
            name: "[name].[hash].[ext]",
            outputPath: "videos"
          }
        },
      },
    ],
  },
  resolve: {
    modules: ['client', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss', '.mp4'],
  },
  plugins: [ new webpack.HotModuleReplacementPlugin()],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
    publicPath: '/dist',
  },
};