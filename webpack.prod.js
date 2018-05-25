const path = require('path');
const webpack = require('webpack');
const ConfigWebpackPlugin = require('config-webpack');
const publicPath = '/dist/build/';

module.exports = env => {
  console.log('Environment: ', env.NODE_ENV)
  process.env.NODE_ENV = env.NODE_ENV;

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, publicPath),
      filename: '[name].bundle.js',
      publicPath: publicPath,
      sourceMapFilename: '[name].map'
    },
    devServer: {
      port: 3000,
      host: 'localhost',
      //Be possible go back pressing the "back" button at chrome
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: publicPath,
      contentBase: path.join(__dirname, publicPath)
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),
      new ConfigWebpackPlugin('Config')
    ],
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.js|.jsx?$/,
          exclude: /(node_modules)/,
          loaders: ["babel-loader"]
        }]
    }
  }
}