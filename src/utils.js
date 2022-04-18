const { spawn } = require('child_process');
const fs = require('fs');


const execute = async (str) => {

  return await new Promise( (resolve, reject) => {

    cmd = str.split(' ');

    const childProcess = spawn(cmd.shift(), cmd);

    console.log(str)

    // Pipe the input on the parent stdin to the child stdin
    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on('data', data => {
      console.log(`stdout: ${data}`);
    });

    childProcess.stderr.on('data', data => {
      console.log(`stderr: ${data}`);
    });

    childProcess.on('error', (error) => {
      console.log(`error: ${error.message}`);
    });

    childProcess.on('close', code => {
      // console.log(`child process exited with code ${code}`);
      resolve();
    });
  
  });
};

const replaceAll = (str, searcher, replacer) => {

  while (str.indexOf(searcher) !== -1) {

    str = str.replace(searcher, replacer);
  }

  return str;
};

const writeFile = (path, content, sync=true) => {

  if (sync) {
    console.log('test')
    fs.writeFileSync(path, content);
    return
  }
  
  fs.writeFile(path, content);
};


exports.execCmd = execute;
exports.replaceAll = replaceAll;
exports.writeFile = writeFile;
