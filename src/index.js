const path = require('path');

// import install from './init';
const { install } = require('./init/index.js');

// DIRNAME = process.cwd().split('/').pop();

// execute('cd ./' + DIRNAME);
install();
// execute('npm set-script dev webpack-dev-server --save-dev');  
// execute('npm run dev');
