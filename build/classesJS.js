"use strict";
class Pokemon {
    constructor(nome, forca) {
        this.nome = nome;
        this.forca = forca;
        this.rounds = 0;
    }
    atacar() {
        this.rounds++;
        return `Attaque ${this.rounds} com força: ${this.forca}`;
    }
    calcularForca() {
        return this.forca - (1 * this.rounds);
    }
}
let pok = new Pokemon("Pikaxu", 25);
let pik = new Pokemon("Arceus", 35);
console.log(pik.atacar());
console.log(pok.atacar());
console.log(pik.atacar());
console.log(pok.atacar());
console.log(pik.atacar());
console.log(pok.atacar());
console.log(pik.atacar());
console.log(pok.atacar());
console.log(pik.calcularForca());
console.log(pok.calcularForca());
class PokemonFilho extends Pokemon {
    constructor() {
        super("Jr", 10);
    }
}
let pokJr = new PokemonFilho();
pokJr.atacar();
