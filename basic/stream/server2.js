var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {

    try {
        var stream = fs.createReadStream('./statue_of_liberty.png');
        stream.pipe(res);
    } catch (error) {
        throw error;
    }
});

server.listen(1234);
console.log('start server ...');