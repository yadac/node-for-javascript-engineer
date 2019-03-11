var fs = require('fs');
var http = require('http');
var zlib = require('zlib');


var server = http.createServer(function (req, res) {
    try {
        res.setHeader('Content-Encoding', 'gzip');
        var stream = fs.createReadStream('./statue_of_liberty.png');
        stream.pipe(zlib.createGzip()).pipe(res);
    } catch (error) {
        throw error;
    }
});

server.listen(1234);
console.log('start server ...');