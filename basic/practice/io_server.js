var http = require('http');
var fs = require('fs');
var io = require('./../../sockettest/node_modules/socket.io');

var server = http.createServer(function (req, res) {
    var source = fs.createReadStream('index.html');
    res.writeHead(200);
    source.pipe(res);
});

io = io(server);
let counter = 0;

io.sockets.on('connection', function (socket) {

    io.emit('change', {
        count: counter + 1
    });

    socket.on('join', function () {
        counter++;
        socket.broadcast.emit('change', {
            count: counter
        });
    });

    socket.on('disconnect', function () {
        counter--;
        socket.broadcast.emit('change', {
            count: counter
        });
    });
});

server.listen(1234);