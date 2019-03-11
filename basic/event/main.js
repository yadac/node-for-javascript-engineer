var myEmitter = require('./myEmitter');

myEmitter.init();

setInterval(function () {
    myEmitter.fire();
}, 1000)

setInterval(function () {
    myEmitter.fire2();
}, 2000)
