"use strict";
const bot1 = {
    id: 1, name: "Testes"
};
const bot2 = {
    id: 1, name: "Testes",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "Hello";
    }
}
const pessoa1 = new Pessoa(1, "Roni");
