//--------------------------------semana 1----------------------

let nome1 = "Meriadoc";
let idade1 = 4;
let chipado1 = false;
let cor1 = ["Laranja", "Amarelo"] // para a semana 2

let nome2 = "Peregrin";
let idade2 = 4;
let chipado2 = false;
let cor2 = ["Laranja", "Amarelo"]// para a semana 2

let nome3 = "Mamacita";
let idade3 = 6;
let chipado3 = false;
let cor3 = ["Preta", "Branca"] // para a semana 2

let nome4 = "Elanor";
let idade4 = 3;
let chipado4 = true;
let cor4 = ["Branca", "Laranja", "Preta"] // para a semana 2

let nome5 = "Loki";
let idade5 = 1;
let chipado5 = true;
let cor5 = ["Cinza", "Branco"] // para a semana 2

const idadeMedia = ((idade1+idade2+idade3+idade4+idade5)/5);
console.log(idadeMedia); 

const verficacaoChip = chipado1 && chipado2 && chipado3 && chipado4 && chipado5;
console.log(verficacaoChip);

// ------------------------semana 2 ------------------------

console.log(nome1.toUpperCase(), idade1, chipado1, cor1);
console.log(nome2.toUpperCase(), idade2, chipado2, cor2);
console.log(nome3.toUpperCase(), idade3, chipado3, cor3);
console.log(nome4.toUpperCase(), idade4, chipado4, cor4);
console.log(nome5.toUpperCase(), idade5, chipado5, cor5);

//-----------------------semana 3----------------------------

const osMeusGatos =[];

const meusGatos1 ={
    nome: "Meriadoc",
    idade: 4,
    Chipado: true,
    Cor:["Laranja", "Amarelo"]
};
const meusGatos2 ={
    nome: "Peregrin",
    idade: 4,
    Chipado: false,
    Cor:["Laranja", "Amarelo"]
};
const meusGatos3 ={
    nome: "Mamacita",
    idade: 6,
    Chipado: false,
    Cor:["Preta", "Branca"]
};
const meusGatos4 ={
    nome: "Elanor",
    idade: 3,
    Chipado: true,
    Cor:["Branca", "Laranja", "Preta"]
};
const meusGatos5 ={
    nome: "Loki",
    idade: 1,
    Chipado: true,
    Cor:["Cinza", "Branco"]
};
/* 
osMeusGatos.push(meusGatos1, meusGatos2, meusGatos3, meusGatos4, meusGatos5); //retirado para a semana 4  

console.log(osMeusGatos);
*/

//-------------------------semana 4---------------------

/*
if (meusGatos1 ["Chipado"]){ ----> Todo objeto é um array, logo, tbm podemos uma acessar um item como um array
*/

/*
Object.keys(obj) – returns all the keys of object as array
Object.values(obj) – returns all the values of the object as array -> Como curiosidade
Object.entries(obj) – returns an array of [key, value]
console.log(Object.entries(meusGatos1));
*/


// estou trocando o *ALERT* po um *CONSOLE.LOG* para ficar mais fácil de trabalhar a página. 
if(meusGatos1.Chipado){
    osMeusGatos.push(meusGatos1)
} else {
    console.log("Gato não chipado, procurar o Vet")
};
if(meusGatos2.Chipado){
    osMeusGatos.push(meusGatos2)
} else {
    console.log("Gato não chipado, procurar o Vet")
};
if(meusGatos3.Chipado){
    osMeusGatos.push(meusGatos3)
} else {
    console.log("Gato não chipado, procurar o Vet")
};
if(meusGatos4.Chipado){
    osMeusGatos.push(meusGatos4)
} else {
    console.log("Gato não chipado, procurar o Vet")
};
if(meusGatos5.Chipado){
    osMeusGatos.push(meusGatos5)
} else {
    console.log("Gato não chipado, procurar o Vet")
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
console.log("Chipado: "+osMeusGatos[0].Chipado);
console.log("Cor: "+osMeusGatos[0].Cor);
console.log ("---------")
console.log("nome: "+osMeusGatos[1].nome);
console.log("idade: "+osMeusGatos[1].idade);
console.log("Chipado: "+osMeusGatos[1].Chipado);
console.log("Cor: "+osMeusGatos[1].Cor);
console.log ("---------")
*/

//parte 2

/*
for (let i = 0; i < osMeusGatos.length; i++){
    console.log("nome: "+osMeusGatos[i].nome);
    console.log("idade: "+osMeusGatos[i].idade);
    console.log("Chipado: "+osMeusGatos[i].Chipado);
    console.log("Cor: "+osMeusGatos[i].Cor)
} */

for (gato of osMeusGatos) {
    for (propriedade in gato) {
        console.log(`${propriedade}: ${gato[propriedade]}`)
    }
}
