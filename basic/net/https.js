var https = require('https');
var fs = require('fs');

const option = {
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server-cert.key'),
};

var server = https.createServer(option, function (req, res) {
    res.writeHead(200);
    res.end('hello world');
});

server.listen(1234);
console.log('start server ...');