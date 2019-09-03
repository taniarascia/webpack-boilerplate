const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   *
   * @url https://webpack.js.org/configuration/entry-context/
   */
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },

  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   *
   * @url https://webpack.js.org/configuration/output/
   */
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js',
  },

  /**
   * Plugins
   *
   * Customize the Webpack build process.
   *
   * @url https://webpack.js.org/configuration/plugins/
   */
  plugins: [
    /**
     * CleanWebpackPlugin
     *
     * Removes/cleans build folders and unused assets when rebuilding.
     *
     * @url https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin(),

    /**
     * CopyWebpackPlugin
     *
     * Copies files from specified folder to output folder.
     */
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../public'), to: 'assets' }]),

    /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     *
     * @url https://github.com/jantimon/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      favicon: 'public/images/favicon.png',
      template: path.resolve(__dirname, '../src/template.html'), // template file
      filename: 'index.html', // output file
    }),
  ],

  /**
   * Module
   *
   * Determine how modules within the project are treated.
   *
   * @url https://webpack.js.org/configuration/module/
   */
  module: {
    rules: [
      /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },

      /**
       * Styles
       */
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', // injects CSS directly into the head
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      /**
       * Images
       */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },

      /**
       * Fonts
       */
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]',
          limit: 10000,
          context: 'src', // prevent display of src/ in filename
        },
      },
    ],
  },
}
