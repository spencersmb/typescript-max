class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor( name:string, public username: string ) {
        this.name = name;
    }

    printAge() {
        this.setType("old guy");
        return this.age;
    }

    private setType( type: string ){
        this.type = type;
    }
}

const person = new Person('Spencer', 'flatline');


// Class inheritance
class Spencer extends Person {

    constructor(username: string){
        super("Spencer", username);
        this.age = 35;
    }
}

const spencer = new Spencer("Spencer");
// console.log(spencer);

//Getters and setters
class Plant {

    private _species: string;

    constructor(){
        this._species = "extinct";
    }

    get species(){
        return this._species;
    }

    set species(value: string){
        if(value.length > 3){
            this._species = value;
        }else{
            this._species = "Extinct";
        }
    }

}

let plant = new Plant();
// console.log(plant.species);
plant.species = "Fern";
// console.log(plant.species);

///Static methods and Properties
class Helpers {
    static PI: number = 3.14;
    static caclCircleCerfumference( diameter: number ):number{
        return this.PI * diameter;
    }
}

class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string; //read only property

    private constructor( name: string ){
        this.name = name;
    }

    static getInstance(){

        //check if the instance has been instantiated so it only creates one of itself
        if( !OnlyOne.instance ){
            OnlyOne.instance = new OnlyOne('The only one');
        }

        return OnlyOne.instance;
    }
}

let right = OnlyOne.getInstance();
// console.log(right);
