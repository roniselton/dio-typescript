// Funcções 

function nomeFuncao ( n1: number , n2:string , n3 :Date): number{
    console.log( n2 + " - " + n3.getDay() + " - " +n3.getMonth() + " - " +n3.getFullYear() );
    return n1;
}

let soma: number  = nomeFuncao( 1 , "Roni" , new Date("2022-06-11 00:00") );
console.log( soma );


function interpolacaoString( n1: number , n2: number ):string{
    return `Os valores ${n1} e ${n2}  somam ` + (n1+ n2);
}

console.log( interpolacaoString(5, 3));


// Funções  Multi Tipos 

function callPhone( phone: number | string ):number | string{
    console.log( `Telefone: ${phone}` );
    return phone;
}


console.log(  callPhone("123") );

console.log(  callPhone( 9987 ) );


// Funcções Assincronas
async function consultarDados(id: number): Promise<string>{
    return "Roni";
}

consultarDados(1)
.then( (x)=>console.log( "Resulttado da Promise" + x ) )
.catch((error)=>console.log("erro ao consultar")); 
