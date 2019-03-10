var childProcess = require('child_process');

childProcess.execFile('ls', ['-l'], function (err, stdout, stderr) {
    if (err) return console.error(err);
    console.log(stdout);
    console.log(stderr);
});