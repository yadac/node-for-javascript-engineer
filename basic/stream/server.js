var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    fs.readFile('./statue_of_liberty.png', function (err, img) {
        if (err) {
            res.end('file not found');
        } else {
            res.write(img);
        }
    });
});

server.listen(1234);
console.log('start server ...');