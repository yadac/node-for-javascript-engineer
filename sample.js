var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.write('Hello World');
	res.end();
});

server.listen(1234);
console.log('start server...');