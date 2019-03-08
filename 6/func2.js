// like class?
var Hoge = function () { }

Hoge.prototype.add = function (a, b) {
    return a + b;
}

Hoge.prototype.sub = function (a, b) {
    return a - b;
}

var hoge = new Hoge();
module.exports = hoge;