const path = require('path'); 
const { chdir:chdir } = require('process'); 

const { execCmd, writeFile } = require('./utils');
const webpackConfig = require('./webpackConfigTemplate');
const typescriptConfig = require('./typescriptConfigTemplate');
const babelPresets = require('./babelPresetsTemplate');

const DIRNAME = './app';
const WEBPACK_CONFIG_FILE_PATH = './webpack.config.js';
const TS_CONFIG_FILE_PATH = './tsconfig.json';
const BABEL_PRESETS_FILE_PATH = './.babelrc';

exports.install = async () => {

  // # init
  chdir(DIRNAME);
  await execCmd('pwd');
  await execCmd('npm init -y');

  // # babel
  await execCmd('npm i @babel/core --save-dev');
  await execCmd('npm i @babel/preset-env --save-dev');
  await execCmd('npm i @babel/preset-react --save-dev');
  await execCmd('npm i babel-loader --save-dev');
  webpackConfig.addBabelLoader();
  
  // # webpack
  await execCmd('npm i webpack --save-dev');
  await execCmd('npm i webpack-dev-server --save-dev');
  await execCmd('npm i webpack-cli --save-dev');

  // setting npm run dev as webpack-dev-server inside package.json
  await execCmd('npm set-script dev webpack-dev-server');  
  await execCmd('npm set-script build:dev webpack --mode=’development’');
  await execCmd('npm set-script build:prod webpack --mode=’production’');

  // # react
  await execCmd('npm i react --save');
  await execCmd('npm i react-dom --save');
  
  // # react-router
  await execCmd('npm i react-router --save');
  await execCmd('npm i react-router-dom --save');
  
  // # redux
  await execCmd('npm i redux --save');
  await execCmd('npm i react-redux --save');
  
  // # redux-saga
  await execCmd('npm i redux-saga --save');
  
  // # typescript
  await execCmd('npm i typescript --save');
  await execCmd('npm i @types/node --save');
  await execCmd('npm i @types/react --save');
  await execCmd('npm i @types/react-dom --save');
  await execCmd('npm i @types/react-redux --save');
  await execCmd('npm i @types/react-router-dom --save');
  await execCmd('npm i @babel/preset-typescript --save-dev');
  babelPresets.addPreset('@babel/preset-typescript');
  
  // # jwt
  await execCmd('npm i jsonwebtoken --save');
  
  // # less
  await execCmd('npm i less less-loader --save');
  webpackConfig.addLessLoader();
  
  writeFile(WEBPACK_CONFIG_FILE_PATH, webpackConfig.getTemplate());
  writeFile(TS_CONFIG_FILE_PATH, typescriptConfig.getTemplate());
  writeFile(BABEL_PRESETS_FILE_PATH, babelPresets.getTemplate());
};
