const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
};

// const myEmitter = new MyEmitter();
// myEmitter.on('event', function () {
//     console.log('an event occurred');
// })

// exports.emitEvent = function () {
//     myEmitter.emit('event');
// }

var emitEvent = function () { 
    var myEmitter = null;
};

emitEvent.prototype.init = function () {
    this.myEmitter = new MyEmitter();
    this.myEmitter.on('event', function () {
        console.log('an event occurred');
    });
    return true;
}

emitEvent.prototype.fire = function () {
    this.myEmitter.emit('event');
    return true;
}

var ee = new emitEvent();
module.exports = ee;
