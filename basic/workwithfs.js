var fs = require('fs');
var path = require('path');

var out = 'output.txt';

var data = fs.readFileSync('./../temp.html', 'utf-8');
// console.log(data);
fs.writeFileSync(out, data, function (err) {
    if (err) throw err;
});

setTimeout(function () {
    console.log('delete file :' + path.resolve(out));
    fs.unlink(out, function (err) {
        if (err) throw err;
    });
}, 5000);

setInterval(function () {
    console.log(Date.now());
}, 1000);