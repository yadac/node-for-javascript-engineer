var net = require('net');

var server = net.createServer(function (connection) {
    console.log('client connected');
    connection.on('end', function () {
        console.log('client disconnected');
    });
    connection.write('hello world');
    connection.pipe(connection);
});

server.listen(1234, function () {
    console.log('server is listening');
});
