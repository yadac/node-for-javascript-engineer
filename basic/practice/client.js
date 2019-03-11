var http = require('http');
var fs = require('fs');

var dir = fs.createWriteStream(process.argv[3]);

const req = http.request(process.argv[2], function (res) {
    res.setEncoding('utf-8');
    res.pipe(dir);
});

req.on('error', function (error) {
    console.error(error);
});

req.end();