// usar ? ona tributo dad classe torna ela opcional

//  modificadores de acesso
/*
    public , private e protected;
*/

class Pokemon {
    public nome?:string;
    protected forca: number ;
    private rounds : number ;

    constructor(nome:string , forca: number){
        this.nome = nome;
        this.forca = forca;
        this.rounds = 0;
    }

    atacar(  ):string{
        this.rounds ++;
       return `Attaque ${this.rounds} com força: ${this.forca}`;
    }

    calcularForca():number{
        return this.forca - (1 * this.rounds);
    }

}

let pok = new Pokemon("Pikaxu" , 25);

let pik = new Pokemon("Arceus" , 35);
console.log(pik.atacar()) ;
console.log(pok.atacar()) ;
console.log(pik.atacar()) ;
console.log(pok.atacar()) ;
console.log(pik.atacar()) ;
console.log(pok.atacar()) ;
console.log(pik.atacar()) ;
console.log(pok.atacar()) ;

console.log(pik.calcularForca()) ;
console.log(pok.calcularForca()) ;



class PokemonFilho extends Pokemon{

    constructor(){
        super("Jr", 10); 
    }
    
}

let pokJr = new PokemonFilho();
pokJr.atacar();