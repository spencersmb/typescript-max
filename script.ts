/// <reference path="math.ts" />
//edited tsconfig file


console.log('Scirpts.js loaded AGAIN 2');
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