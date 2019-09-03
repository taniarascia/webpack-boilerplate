# Webpack Boilerplate

Minimal Webpack 4 boilerplate with Babel, Sass, ESLint, Hot Module Replacement, and development/production optimization.

## Installation

```
git clone git@github.com:taniarascia/webpack-boilerplate
npm i
```

## Usage

### Development server

```bash
npm start
```

### Production build

```bash
npm run build
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)

## Dependencies

### Webpack

- `webpack` - Module and asset bundler.
- `webpack-cli` - Command line interface for Webpack.
- `webpack-dev-server` - Development server for Webpack.
- `webpack-merge` - Simplify development/production configuration

### Babel

- `@babel/core` - Transpile ES6+ to backwards compatible JavaScript.
- `@babel/plugin-proposal-class-properties` - Use properties directly on a class.
- `@babel/preset-env` - Smart defaults for Babel.
- `babel-eslint` - Lint Babel code.
  - `eslint` - ESLint.

### Loaders

- `babel-loader` - Transpile files with Babel and Webpack.
- `sass-loader` - Load SCSS and compile to CSS.
  - `node-sass` - Node Sass.
- `postcss-loader` - Process CSS with PostCSS.
  - `cssnano` - Optimize and compress PostCSS.
  - `postcss-preset-env` - Sensible defaults for PostCSS.
- `css-loader` - Resolves CSS imports into JS.
- `style-loader` - Inject CSS into the DOM.
- `eslint-loader` - Use ESLint with Webpack.
- `file-loader` - Copy files to build folder.
- `url-loader` - Encode and inline files. Falls back to file-loader.

### Plugins

- `clean-webpack-plugin` - Remove/clean build folders.
- `copy-webpack-plugin` - Copy files to build directory.
- `html-webpack-plugin` - Generate HTML files from template.
- `mini-css-extract-plugin` - Extract CSS into separate files.
- `optimize-css-assets-webpack-plugin` - Optimize and minimize CSS assets.
- `terser-webpack-plugin` - Minify JavaScript.

## Author

- [Tania Rascia](https://www.taniarascia.com)

## License

This project is open source and available under the [MIT License](LICENSE).
