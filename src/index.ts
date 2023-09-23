type heroi = {
    name : string;
    vulgo : string;
};


function printHeroi ( hero: heroi){
    console.log( hero.name + " " + hero.vulgo);
}

console.log(" Oi ");
printHeroi( {name: "Roniselton" , vulgo :"Roni"})