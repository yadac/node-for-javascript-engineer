let http = require('http');

// let target = 'https://www.google.com/';
let target = 'http://www.stallman.org/'

var request = function () {

    return new Promise(function (resolve, reject) {
        http.get(target, function (res) {

            let body = '';
            res.setEncoding('utf-8');

            res.on('data', function (data) {
                body += data;
            });

            res.on('end', function () {
                resolve(body);
            });

        }).on('error', function (e) {
            reject(e);
        });
    });
}()
    .then(function (result) {
        console.log(result);
    }).catch(function (e) {
        console.log(e);
    });