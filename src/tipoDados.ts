let ativo : boolean = false;
let excluido  = false;

ativo = true;
// ativo = 2;

let n1:number = 30;
let altura:number = 1.99;

let nome:string = " teste ";

// Null and undefined
let nulo: null = null; 
let indefinido: undefined = undefined;

// Any
let qqer:any = 1;
qqer = " oi ";

// Void
let nada:void ;
function exect(): void{

}


// Objects

// Sem previsibilidade
let produto : object = { nome: "Chocolate" , cidade :"Cuiaba" , preco: 12.59 };

type produtoLoja = {
    nome: string;
    preco:number;
    unidades: number;
};

let p1 : produtoLoja = {nome:"Chocolate" ,preco : 4.99 , unidades: 2  }


// Arrays 
let dadosArray : string[] =["1" , "s2" , "s3"];
let dados2Array: Array<number> =[ 2,5,7,3,2,1];

let infos: (string|number)[] = [ "tetxt" , 234 , 111, "outro" ];

// Tuplas  Trazer dados na ordem sem criar um type;

let boleto:[string , number , number] = ["aggua" , 1299.9 , 1234];


// Metodos dos Arrays sao os mesmos
let  x = dadosArray.pop();
console.log ( x );

// Dates
let niver : Date = new Date("1981-09-11 08:30");
console.log ( niver.toString() );
let agora : Date = new Date();
console.log ( agora.toString() );
console.log ( Date.now() );


