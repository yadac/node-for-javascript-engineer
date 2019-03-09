var express = require('./../expresstest/node_modules/express');
var ejs = require('./../expresstest/node_modules/ejs');
var app = express();

var msg = '';

app.engine('ejs', ejs.renderFile);

app.get('/', function (req, res) {
    res.render('temp.ejs', {})
});

app.post('/ajax', function (req, res) {
    msg += 'hoge';
    res.json({
        msg: msg
    });
});

var server = app.listen(1234, function () {
    console.log('start server ...');
})
