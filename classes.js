var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        this.setType("old guy");
        return this.age;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person('Spencer', 'flatline');
// Class inheritance
var Spencer = (function (_super) {
    __extends(Spencer, _super);
    function Spencer(username) {
        _super.call(this, "Spencer", username);
        this.age = 35;
    }
    return Spencer;
}(Person));
var spencer = new Spencer("Spencer");
console.log(spencer);
//Getters and setters
var Plant = (function () {
    function Plant() {
        this._species = "extinct";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Extinct";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Fern";
console.log(plant.species);
///Static methods and Properties
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.caclCircleCerfumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
//# sourceMappingURL=classes.js.map