var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var urlPaths = url.parse(req.url);
    var path = __dirname + '/' + urlPaths.pathname;
    var stream = fs.createReadStream(path);
    
    stream.pipe(res);

    // stream.on('data', function(data){
    //     res.write(data);
    // });
    // stream.on('end', function(data){
    //     res.end();
    // });

});

server.listen(1234);
console.log('start server ...');