"use strict";
var Circle = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
require("jQuery");
// co
var number;
console.log(Circle.PI);
console.log(rectangle_1.default(20, 20));
console.log($("body"));
function controllMe(isTrue) {
    var result;
    result = 33;
    if (isTrue) {
        result = 12;
    }
    return result;
}
//# sourceMappingURL=app.js.map