
class Car {
    acceleration: number;

    constructor( public name: string ){
     this.acceleration = 0;
    }

    honk(){
        console.log("Toooooooooot!");
    }
    accelerate( speed:number ){
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2 - Two objects, based on each other ...
class BaseObject  {
    width: number;
    length: number;

    constructor(){
        this.width = 0;
        this.length = 0;
    }

};

class Rectangle extends BaseObject {
    constructor(){
        super();
    }

    calcSize():number {
        return this.width * this.length;
    }

}

let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());


class PersonTest {

    private _firstName:string;
    enumerable:boolean;
    configurable:boolean;

    constructor() {
        this.enumerable = true;
        this.configurable = true;
    }

    get firstName():string {
        return this._firstName;
    }

    set firstName(value:string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }

}
const myPerson = new PersonTest();
console.log(myPerson.firstName);
myPerson.firstName = "Ma";
console.log(myPerson.firstName);
myPerson.firstName = "Maximilian";
console.log(myPerson.firstName);