var express = require('./../expresstest/node_modules/express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello express');
});

app.get('/test', function (req, res) {
    res.send('hello express test');
});

// express is web-server
var server = app.listen(1234, function () {
    console.log('start server ...');
});