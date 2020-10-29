const path = require('path')
const HtmlWebpackHotPlugin = require('html-webpack-hot-plugin')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  // HTML hot reload plugin
  htmlHotPlugin: new HtmlWebpackHotPlugin({
    hot: true,
  })
}
