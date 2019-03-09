var express = require('./../expresstest/node_modules/express');
var ejs = require('./../expresstest/node_modules/ejs');
var app = express();
var session = require('./../expresstest/node_modules/express-session');

app.engine('ejs', ejs.renderFile);
app.use(session({
    secret: 'hoge',
    resave: true,
    saveUninitialized: true
}));

app.get('/', function (req, res) {
    var cnt = req.session.cnt === undefined ? 0 : req.session.cnt;
    cnt++;
    req.session.cnt = cnt;
    res.render('temp.ejs', {
        cnt: cnt
    });
});

var server = app.listen(1234, function () {
    console.log('start server ...');
})
