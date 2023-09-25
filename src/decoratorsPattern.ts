//decorators
function ExibirNome(target:any){
    console.log( target );
}

@ExibirNome
class Funcionario{
    
}

@ExibirNome
class Quincas{
    
}

// DEcorators em classes Adicionando atributos dinamicamente.
// Só roda em dev
function ApiVersion( version: string ){
    return (target:any) => {
        Object.assign( target.prototype, {__version: version , __name: "API"}) //Injecao de Propriedade dinamicamente no objeto
    }
}

function toUpperRoni(){
    return (target:any, propertyKey: string) => {
        // console.log(propertyKey);
        // console.log(target);
        // console.log(target[propertyKey]);
        // console.log(" --- ");
        let _value =  target[propertyKey];
        const getter = () => _value;
        const setter = (val:string)=>{
            console.log("set -> "+val);
            _value = val.toUpperCase(); 
            console.log("setou -> "+_value);   
        }
        Object.defineProperty( target , propertyKey, {
            get:getter,
            set:setter,
        });
    }
}


@ApiVersion("1.21")
class Api{

    @toUpperRoni()
    // @minLenght(3)
    nome: string;

    constructor(nome:string){
        this.nome = nome;
    }
}


const api = new Api("produtos");
console.log( api.__name + " - " + api.__version );
console.log( `Imprimindo ${api.nome}`  );
api.nome = "aa";
console.log( `Imprimindo ${api.nome}`  );

function minLenght(tamMin: number) {
    return (target: any, propertyKey: string) => {
        let _value = target[propertyKey];
        const getter = () => _value;
        const setter = (val:string) =>{
            console.log("setter Min lenght ")
            if(val.length < tamMin ){
                throw new Error(`Tamanho do texto menor que ${tamMin}!!!`);
            }
            else{
                _value = val;
            }
        };
        
        Object.defineProperty(target , propertyKey , { 
            get: getter,
            set: setter,
            // configurable: true,
            writable:true,
        });        
     }
} 

