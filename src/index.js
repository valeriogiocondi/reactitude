const path = require('path');
const { makeDirectory } = require('./shared/utils');
const { chdir:chdir } = require('process'); 

const { install } = require('./install');
const { architecture } = require('./architecture'); 

// DIRNAME = process.cwd().split('/').pop();
const DIRNAME = './app';

// init
makeDirectory(DIRNAME);
chdir(DIRNAME);

// install webpack and packages
install();

// create basic architecture
architecture(DIRNAME);
  
// await execCmd('npm run build:dev');
// await execCmd('npm run dev');
// await execCmd(`kill-server ${webpackConfig.getPort()}`);