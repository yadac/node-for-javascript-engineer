var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('ok');
}).listen(1234);

console.log('start server ...');