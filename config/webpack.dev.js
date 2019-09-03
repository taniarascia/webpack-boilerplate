const paths = require('./paths')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  /**
   * Mode
   *
   * Set the mode to development or production.
   *
   * @url https://webpack.js.org/configuration/mode/
   */
  mode: 'development',

  /**
   * Devtool
   *
   * Control how source maps are generated.
   *
   * @url https://webpack.js.org/configuration/devtool/
   */
  devtool: 'inline-source-map',

  /**
   * DevServer
   *
   * A server for quick development.
   *
   * @url https://webpack.js.org/configuration/dev-server/
   */
  devServer: {
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    /**
     * HotModuleReplacementPlugin
     *
     * Only update what has changed.
     */
    new webpack.HotModuleReplacementPlugin(),
  ],
})
