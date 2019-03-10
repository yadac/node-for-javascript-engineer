let http = require('./../../requesttest/node_modules/request');

let target = 'http://www.stallman.org/'

http.get(target, function (err, result) {
    if (err) return err;
    console.log(result);
})