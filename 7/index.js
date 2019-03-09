var http = require('http');
var fs = require('fs');
var ejs = require('./../ejstest/node_modules/ejs');

var temp = fs.readFileSync('./temp.ejs', 'utf-8');

var server = http.createServer(function (req, res) {
    var data = ejs.render(temp, {
        title: 'EJS TEST',
        contents1: '<p>this is not escaped</p>',
        contents2: '<p>this is escaped</p>',
        arr: ['strawberry', 'melon', 'banana']

    });
    res.writeHead(200, { 'Content-type': 'text-html' });
    res.write(data);
    res.end();
});

server.listen(1234);
console.log('start server ...');

