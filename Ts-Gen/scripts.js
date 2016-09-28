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
// helps not pollute global namespace
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
    function calcRectangle(width, length) {
        return width * length;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
//added ref in scripts.ts
console.log(MyMath.calcCircumference(10));
/// <reference path="math.ts" />
//edited tsconfig file
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var Car = (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        _super.call(this);
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
var PersonTest = (function () {
    function PersonTest() {
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(PersonTest.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonTest;
}());
var myPerson = new PersonTest();
console.log(myPerson.firstName);
myPerson.firstName = "Ma";
console.log(myPerson.firstName);
myPerson.firstName = "Maximilian";
console.log(myPerson.firstName);
//# sourceMappingURL=scripts.js.map