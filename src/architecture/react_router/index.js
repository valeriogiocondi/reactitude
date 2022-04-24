const { template } = require('./reactRouterTemplate.js');
const path = require('path'); 
const { copyFile, makeDirectory, writeFile } = require('../../shared/utils');

exports.reactRouter = () => {

  const init = (appName) => {

    makeDirectory('src/react-router');
    copyFile(path.resolve(__dirname, 'route.json'), path.resolve(__dirname, '../../../', appName, 'src/react-router/route.json'));

    writeFile(path.resolve(__dirname, '../../../', appName, 'src/react-router/index.tsx'), template());
  };
  
  const add = (path, component) => {

    // Get router.json

    // Add new routePath
    
    // save router.json

    // generate router.tsx
  };

  return {
    init: init
  };
};