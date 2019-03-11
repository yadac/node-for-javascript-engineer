const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
};

var emitEvent = function () {
    let myEmitter = null;
};

emitEvent.prototype.init = function () {
    let count = 0;
    this.myEmitter = new MyEmitter();
    this.myEmitter.on('event1', function () {
        count++;
        console.log(`(${count})an event1 occurred`);
    });
    this.myEmitter.on('event2', function () {
        count++;
        console.log(`(${count})an event2 occurred`);
    });
}

emitEvent.prototype.fire = function () {
    this.myEmitter.emit('event1');
}
emitEvent.prototype.fire2 = function () {
    this.myEmitter.emit('event2');
}

module.exports = new emitEvent();
