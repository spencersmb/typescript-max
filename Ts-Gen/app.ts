import * as Circle from "./math/circle";
import calc from "./math/rectangle";
// import "jQuery"; // use with system js
import $ = require('jquery');
// co
let number: number | null;
console.log(Circle.PI);
console.log(calc(20,20));
console.log($("body"));

function controllMe( isTrue: boolean) {
    let result: number;
    result = 33;

    if( isTrue ){
        result = 12;
    }
    
    return result;
}