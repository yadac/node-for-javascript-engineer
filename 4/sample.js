var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var indexPage = fs.readFileSync('./index.html', 'utf-8');

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var urlParts = url.parse(req.url, true);
        console.log('---Get Request---');
        console.log('name = ' + urlParts.query.name);
        console.log('age  = ' + urlParts.query.age);
    } else {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var params = qs.parse(body);
            console.log('---Post Request---');
            console.log('name = ' + params.name);
            console.log('age  = ' + params.age);
        });
    }
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(indexPage);
    res.end();
});

server.listen(1234);
console.log('server start...');