var express = require('./../expresstest/node_modules/express');
var ejs = require('./../ejstest/node_modules/ejs');
var app = express();

app.engine('ejs', ejs.renderFile);

app.get('/', function (req, res) {
    res.render('temp.ejs', {
        contents: '<p>hoge</p>'
    });
});

var server = app.listen(1234, function () {
    console.log('start server ...');
});