var express = require('./../expresstest/node_modules/express');
var ejs = require('./../expresstest/node_modules/ejs');
var app = express();
var cookieParser = require('./../expresstest/node_modules/cookie-parser');

app.engine('ejs', ejs.renderFile);
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log(req.cookies.cnt);
    var cnt = req.cookies.cnt === undefined ? 0 : req.cookies.cnt;
    cnt++;
    // maxage is milliseconds
    res.cookie('cnt', cnt, { maxAge: 5000});
    res.render('temp.ejs', {
        cnt: cnt
    });
});

var server = app.listen(1234, function () {
    console.log('start server ...');
})
