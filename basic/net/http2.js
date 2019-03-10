let http = require('http');


http.get('http://www.stallman.org/', function (res) {

    let body = '';
    let length = [];

    res.setEncoding('utf-8');

    res.on('data', function (data) {
        // body += data;
        length.push(data.length);
        console.log(data.length);
    });

    res.on('end', function () {
        console.log('--- finished ---');
    });
});