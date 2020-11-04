const HtmlWebpackHotPlugin = require('html-webpack-hot-plugin')

module.exports = {
  html: new HtmlWebpackHotPlugin({
    hot: true,
  }),
}
