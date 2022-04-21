const { replaceAll } = require('../../shared/utils');

let webpackConfigObject = {
  entry: {
    bundle: '$absPathEntry'
  },
  output: {
    path: '$absPathOutput',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: '$absPathOutput'
    },
    open: true,
    hot: true,
    compress: true,
    // historyApiFallBack: true,
    port: 3030,
  },
  mode: 'development',
  module: {
    rules: [],
  },
  plugins: [ '$htmlWebpackPluginObject' ],
  resolve: {
    extensions: ['.js'],
  }
};

exports.addBabelLoader = () => {

  webpackConfigObject.module.rules.push({
    test: `$regexTsxJsx`,
    exclude: `$nodeModulesPath`,
    loader: "babel-loader",
  });
};

exports.addTypescriptLoader = () => {

  webpackConfigObject.resolve.extensions.push('.ts');
  webpackConfigObject.resolve.extensions.push('.tsx');
};

exports.addLessLoader = () => {

  webpackConfigObject.module.rules.push({
    test: `$regexLess`,
    use: [
      "style-loader",
      "css-loader",
      "less-loader",
    ],
  });
};

exports.addSassLoader = () => {

  webpackConfigObject.module.rules.add({
      test: /\.sass$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    }
  );
};

exports.getPort = () => webpackConfigObject.devServer.port;

exports.getTemplate = () => {

  const title = 'Kurkuma CLI';

  let str = JSON.stringify(webpackConfigObject, null, 2);

  str = replaceAll(str, `"$absPathEntry"`, `path.resolve(__dirname, './src/index.tsx')`);
  str = replaceAll(str, `"$absPathOutput"`, `path.resolve(__dirname, './dist')`);
  str = replaceAll(str, `"$htmlWebpackPluginObject"`, `new HtmlWebpackPlugin({ hash: true, title: '${title}', template: path.resolve(__dirname, './src/index.html') })`);
  str = replaceAll(str, `"$nodeModulesPath"`, `/node_modules/`);
  str = replaceAll(str, `"$regexTsxJsx"`, `/\\.(ts|js)x?$/`);
  str = replaceAll(str, `"$regexLess"`, `/\\.less$/i`);
  
  return `
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ${str} ;
`;
};