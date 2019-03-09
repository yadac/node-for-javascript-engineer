var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('hello', {
        title: 'Hello sample',
        msg: 'hello new world'
    });
});

module.exports = router;
