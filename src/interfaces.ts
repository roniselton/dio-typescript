type robot = {
    id: number;
    name: string;
}

interface robot2 {
    readonly id: number; //Tem o efeito de um final 1 vez atribuido o valor não pode mais ser alterado.;
    name: string;

    //metodo
    sayHello() : string ;
}

const bot1 : robot = {
    id: 1, name: "Testes" 
}
const bot2 : robot2 = {
    id: 1, name: "Testes",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

// INTERFACE X TYPE
console.log( bot1 );
console.log( bot2 );


class Pessoa implements robot2{
    id: number;
    name: string;

    constructor( id: number , name:string ){
        this.id = id ;
        this.name = name;
    }

    sayHello():string {
        return "Hello";
    }
    
}

const pessoa1 = new Pessoa(1 , "Roni");

