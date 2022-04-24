const path = require('path'); 
const { copyFile, makeDirectory } = require('../shared/utils');

const { reactRouter } = require('./react_router');

exports.architecture = (appName) => {

  // build init architecture
  makeDirectory('dist');
  makeDirectory('src');

  // Create components
  const componentsPath = path.resolve(__dirname, 'init_components/');
  const appPath = path.resolve(__dirname, '../../', appName);
  
  copyFile(path.resolve(componentsPath, 'index/Index.tsx'), path.resolve(appPath, 'src/Index.tsx'));
  copyFile(path.resolve(componentsPath, 'index/Index.html'), path.resolve(appPath, 'src/Index.html'));
  copyFile(path.resolve(componentsPath, 'index/Index.less'), path.resolve(appPath, 'src/Index.less'));
  
  makeDirectory('src/_view');
  
  makeDirectory('src/_view/home');
  copyFile(path.resolve(componentsPath, 'home/Home.tsx'), path.resolve(appPath, 'src/_view/home/Home.tsx'));
  copyFile(path.resolve(componentsPath, 'home/Home.less'), path.resolve(appPath, 'src/_view/home/Home.less'));
  
  makeDirectory('src/_view/foo');
  copyFile(path.resolve(componentsPath, 'foo/Foo.tsx'), path.resolve(appPath, 'src/_view/foo/Foo.tsx'));
  copyFile(path.resolve(componentsPath, 'foo/Foo.less'), path.resolve(appPath, 'src/_view/foo/Foo.less'));
  
  makeDirectory('src/_view/error-404');
  copyFile(path.resolve(componentsPath, 'error-404/Error404.tsx'), path.resolve(appPath, 'src/_view/error-404/Error404.tsx'));
  copyFile(path.resolve(componentsPath, 'error-404/Error404.less'), path.resolve(appPath, 'src/_view/error-404/Error404.less'));
  
  // React Router
  reactRouter().init(appName);
};
