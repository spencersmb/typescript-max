/// <reference path="math.ts" />
//edited tsconfig file
console.log('Scirpts.js loaded');
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
//nullables - add to tsconfig.json -> "strictNullChecks": true
// let canBeNull: number | null = 12;
// canBeNull = null; // cannot compile to tsc because its a number first
var canAlsobeNull; // Initially = undefined passes tsc compiler because it starts as undefined
canAlsobeNull = null;
// console.log(canBeNull); 
//# sourceMappingURL=script.js.map