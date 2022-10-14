//--------------------------------semana 1----------------------

let nome1 = "Meriadoc";
let idade1 = 4;
let meu1 = true;
let cor1 = ["Laranja", "Amarelo"] // para a semana 2

let nome2 = "Billy";
let idade2 = 9;
let meu2 = false;
let cor2 = ["Cinza", "Preto"]// para a semana 2

let nome3 = "Peregrin";
let idade3 = 4;
let meu3 = true;
let cor3 = ["Laranja", "Amarelo"]// para a semana 2

let nome4 = "Mamacita";
let idade4 = 6;
let meu4 = true;
let cor4 = ["Preta", "Branca"] // para a semana 2

let nome5 = "Thomas";
let idade5 = 2;
let meu5 = false;
let cor5 = ["Cinza", "Branco"] // para a semana 2


let nome6 = "Elanor";
let idade6 = 3;
let meu6 = true;
let cor6 = ["Branca", "Laranja", "Preta"] // para a semana 2

let nome7 = "Loki";
let idade7 = 1;
let meu7 = true;
let cor7 = ["Cinza", "Branco"] // para a semana 2

const idadeMedia = ((idade1+idade2+idade3+idade4+idade5+idade6+idade7)/7);
console.log(idadeMedia); 

const verficacaoPosse = meu1 && meu2 && meu3 && meu4 && meu5 && meu6 && meu7;
console.log(verficacaoPosse);

// ------------------------semana 2 ------------------------

console.log(nome1.toUpperCase(), idade1, meu1, cor1);
console.log(nome2.toUpperCase(), idade2, meu2, cor2);
console.log(nome3.toUpperCase(), idade3, meu3, cor3);
console.log(nome4.toUpperCase(), idade4, meu4, cor4);
console.log(nome5.toUpperCase(), idade5, meu5, cor5);
console.log(nome6.toUpperCase(), idade6, meu6, cor6);
console.log(nome7.toUpperCase(), idade6, meu6, cor6);


//-----------------------semana 3----------------------------

const osMeusGatos =[];

const meusGatos1 ={
    nome: "Meriadoc",
    idade: 4,
    posse: true,
    Cor:["Laranja", " Amarelo"]
};
const meusGatos2 ={
    nome: "Billy",
    idade: 9,
    posse: false,
    Cor:["Cinza", " Preto"]
};
const meusGatos3 ={
    nome: "Peregrin",
    idade: 4,
    posse: true,
    Cor:["Laranja", "Amarelo"]
};
const meusGatos4 ={
    nome: "Mamacita",
    idade: 6,
    posse: true,
    Cor:["Preta", "Branca"]
};
const meusGatos5 ={
    nome: "Thomas",
    idade: 2,
    posse: false,
    Cor:["Cinza", " Branco"]
};
const meusGatos6 ={
    nome: "Elanor",
    idade: 3,
    posse: true,
    Cor:["Branca", "Laranja", "Preta"]
};
const meusGatos7 ={
    nome: "Loki",
    idade: 1,
    posse: true,
    Cor:["Cinza", "Branco"]
};
/* 
osMeusGatos.push(meusGatos1, meusGatos2, meusGatos3, meusGatos4, meusGatos5, meusGatos6, meusGatos7); //retirado para a semana 4  

console.log(osMeusGatos);
*/

//-------------------------semana 4---------------------

/*
if (meusGatos1 ["posse"]){ ----> Todo objeto é um array, logo, tbm podemos uma acessar um item como um array
*/

/*
Object.keys(obj) – returns all the keys of object as array
Object.values(obj) – returns all the values of the object as array -> Como curiosidade
Object.entries(obj) – returns an array of [key, value]
console.log(Object.entries(meusGatos1));
*/


// estou trocando o *ALERT* po um *CONSOLE.LOG* para ficar mais fácil de trabalhar a página. 
if(meusGatos1.posse){
    osMeusGatos.push(meusGatos1)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos2.posse){
    osMeusGatos.push(meusGatos2)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos3.posse){
    osMeusGatos.push(meusGatos3)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos4.posse){
    osMeusGatos.push(meusGatos4)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos5.posse){
    osMeusGatos.push(meusGatos5)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos6.posse){
    osMeusGatos.push(meusGatos6)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos7.posse){
    osMeusGatos.push(meusGatos7)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
console.log(osMeusGatos);

//----------------------semana 5-------------------

//parte 1
for (let i = 0; i < osMeusGatos.length; i++){
    osMeusGatos[i].Cor = osMeusGatos[i].Cor.join(',')
} 

/*
console.log ("---------");
console.log("nome: "+osMeusGatos[0].nome);
console.log("idade: "+osMeusGatos[0].idade);
console.log("posse: "+osMeusGatos[0].posse);
console.log("Cor: "+osMeusGatos[0].Cor);
console.log ("---------")
console.log("nome: "+osMeusGatos[1].nome);
console.log("idade: "+osMeusGatos[1].idade);
console.log("pose: "+osMeusGatos[1].posse);
console.log("Cor: "+osMeusGatos[1].Cor);
console.log ("---------")
*/

//parte 2

/*
for (let i = 0; i < osMeusGatos.length; i++){
    console.log("nome: "+osMeusGatos[i].nome);
    console.log("idade: "+osMeusGatos[i].idade);
    console.log("posse: "+osMeusGatos[i].posse);
    console.log("Cor: "+osMeusGatos[i].Cor)
} */

for (gato of osMeusGatos) {
    for (propriedade in gato) {
        console.log(`${propriedade}: ${gato[propriedade]}`)
    }
}

//---------------------Semana 6-------------

//parte 1
const arrayDeGatos = osMeusGatos;

const gatosNoMap = arrayDeGatos.map((gato)=>{
    return `O(A) gato(a) ${gato.nome} tem ${gato.idade} anos, e é alem de lindo(a) é ${gato.Cor}.`;
   
});

console.log(gatosNoMap);

//parte 2

const soOsLaranajs = arrayDeGatos.filter( (gato, index, array) => {
    let resultado = false;
    if(gato.cor === "Laranja"){
        resultado = true;

    };
        return resultado;
});



console.log(soOsLaranajs);


