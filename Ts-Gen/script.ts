/// <reference path="math.ts" />
//edited tsconfig file


console.log('Scirpts.js loaded');
type Account = {money: number, deposit: (value: number) => void };
let bankAccount: Account = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: Account, hobbies: string[]  } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

//nullables - add to tsconfig.json -> "strictNullChecks": true
// let canBeNull: number | null = 12;
// canBeNull = null; // cannot compile to tsc because its a number first
let canAlsobeNull; // Initially = undefined passes tsc compiler because it starts as undefined
canAlsobeNull = null;

// console.log(canBeNull);