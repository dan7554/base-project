var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  node: {
    fs: 'empty',
    net:'empty',
    tls: 'empty'
  },
  //Content 
  entry: './src/index.js',
  // A SourceMap without column-mappings ignoring loaded Source Maps. 
  devtool: 'cheap-module-source-map',
  plugins: [
    // Disabling this plugin to autocreate html files on build in favor of manually requiring an html file
    //new HtmlWebpackPlugin({
    //  title: 'Hot Module Replacement'
    //}),
    //Auto replacement of page when i save some file, even css
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.join(__dirname, publicPath),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map',
  },

  devServer: {
    port: 3000,
    host: 'localhost',
    //Be possible go back pressing the "back" button at chrome
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: path.join(__dirname, publicPath),
    //hotmodulereplacementeplugin
    hot: true
  },
  module: {
    rules: [
     {
      test: /\.(s*)css$/,
      use: ['style-loader','css-loader', 'sass-loader']
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
  },
}