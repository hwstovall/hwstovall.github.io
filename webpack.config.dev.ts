import path from 'path'
import express from 'express';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/entry.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'personal-site.local',
    port: 9000,
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    before: (app) => {
       app.use('/assets', express.static('./assets'));
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
};

module.exports = config;
