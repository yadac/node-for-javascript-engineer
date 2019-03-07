var http = require('http');
var fs = require('fs');

// prepare
var indexPage = fs.readFileSync('./index.html','utf-8');
var nextPage = fs.readFileSync('./next.html','utf-8');

var server = http.createServer(function (req, res) {
    var target = '';
    switch (req.url) {
        case '/':
        case '/index':
            target = indexPage;
            break;
        case '/next':
            target = nextPage;
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('bad request');
            return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(target);
    res.end();
});

server.listen(1234);
console.log('start server ...');
