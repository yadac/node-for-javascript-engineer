var http = require('http');
var fs = require('fs');
var ejs = require('./../ejstest/node_modules/ejs');

var main = fs.readFileSync('./main.ejs', 'utf-8');
var sub = fs.readFileSync('./sub.ejs', 'utf-8');

var server = http.createServer(function (req, res) {
    var data = ejs.render(main, {
        contents: ejs.render(sub, {
            data: '<p>hogehoge</p>'
        })
    });

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(data);
    res.end();
});

server.listen(1234);
console.log('start server ...');

