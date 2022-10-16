//--------------------------------semana 1----------------------

let nome1 = "Meriadoc";
let idade1 = 4;
let meu1 = true;
let cor1 = ["Laranja"] // para a semana 2

let nome2 = "Billy";
let idade2 = 9;
let meu2 = false;
let cor2 = ["Cinza", "Preto"]// para a semana 2

let nome3 = "Peregrin";
let idade3 = 4;
let meu3 = true;
let cor3 = ["Laranja"]// para a semana 2

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
    nome: "meriadoc",
    idade: 4,
    responsavel: true,
    Cor:["Laranja"],
    imagem: "IMG/WhatsApp Image 2022-10-15 at 20.58.44.jpeg",//para semana 11
    link:"https://ibb.co/gJjyHmM"//para semana 11
};
const meusGatos2 ={
    nome: "billy",
    idade: 9,
    responsavel: false,
    Cor:["Cinza", " Preto"]
};
const meusGatos3 ={
    nome: "peregrin",
    idade: 4,
    responsavel: true,
    Cor:["Laranja"],
    imagem: "IMG/WhatsApp Image 2022-10-15 at 20.24.32.jpeg",//para semana 11
    link:"https://ibb.co/f8h43pq"//para semana 11
};
const meusGatos4 ={
    nome: "mamacita",
    idade: 6,
    responsavel: true,
    Cor:["Preta", " Branca"],
    imagem: "IMG/WhatsApp Image 2022-10-15 at 20.39.59.jpeg",//para semana 11
    link:"https://ibb.co/Z6TnJNZ"//para semana 11
};
const meusGatos5 ={
    nome: "thomas",
    idade: 2,
    responsavel: false,
    Cor:["Cinza", " Branco"]
};
const meusGatos6 ={
    nome: "elanor",
    idade: 3,
    responsavel: true,
    Cor:["Branca", " Laranja", " Preta"],
    imagem: "IMG/WhatsApp Image 2022-10-15 at 20.39.55.jpeg",//para semana 11
    link:"https://ibb.co/x7mnY08"//para semana 11

};
const meusGatos7 ={
    nome: "loki",
    idade: 1,
    responsavel: true,
    Cor:["Cinza", " Branco"],
    imagem: "IMG/WhatsApp Image 2022-10-15 at 20.40.04.jpeg",//para semana 11
    link:"https://ibb.co/t31XkWL"//para semana 11
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
if(meusGatos1.responsavel){
    osMeusGatos.push(meusGatos1)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos2.responsavel){
    osMeusGatos.push(meusGatos2)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos3.responsavel){
    osMeusGatos.push(meusGatos3)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos4.responsavel){
    osMeusGatos.push(meusGatos4)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos5.responsavel){
    osMeusGatos.push(meusGatos5)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos6.responsavel){
    osMeusGatos.push(meusGatos6)
} else {
    console.log("Esse gato não é meu! Deixa de ser doido e devolve para o dono!")
};
if(meusGatos7.responsavel){
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
/*const arrayDeGatos = osMeusGatos;
const gatosNoMap = arrayDeGatos.map((gato)=>{
    return `O(A) gato(a) ${gato.nome} tem ${gato.idade} anos, e é alem de lindo(a) é ${gato.Cor}.`;
   
});

console.log(gatosNoMap);*/

function retornaObejto (objeto){
    let stringObjeto = ``
    stringObjeto = objeto
    console.log(stringObjeto)
};

retornaObejto(meusGatos1);



//parte 2

/* isso foi o que eu achei que havia sido pedido 
const soOsLaranajs = arrayDeGatos.filter( (gato, index, array) => {
    let resultado = false;
    if(gato.Cor === "Laranja"){
       
        resultado = true;
    } else {
        console.log("Esse gato não é laranja!")
    };
        return resultado;
});*/

const funcaoDeBusca = (arrayObj, input) => {
    let buscaObejto = {}
    for (let i in arrayObj) {
        for (let j in arrayObj[i]) {
            if (arrayObj[i][j]=== input) {
                    let main = document.getElementById("main"); // semana 12
                    let div = document.createElement('div');
                    let section = document.createElement("section");
                    let imagem = document.createElement("img");
                    let ul = document.createElement("ul");
                    let li1 = document.createElement ("li");
                    let li2 = document.createElement ("li");
                    let li3 = document.createElement ("li");
                    let li4 = document.createElement ("li");
                    let a = document.createElement ("a");
                    div.setAttribute("id", "div-sections");
                    section.setAttribute("id","section1");
                    imagem.src = arrayObj[i].imagem;
                    a.setAttribute("href", arrayObj[i].link);
                    a.setAttribute("target","_blank");
                    a.innerHTML = arrayObj[i].nome.toUpperCase()
                    li1.innerHTML = `Nome: `
                    li2.innerHTML = `Idade: ${arrayObj[i].idade}`;
                    li3.innerHTML = `Cor: ${arrayObj[i].Cor}`;
                    li4.innerHTML = "Responsável: Túlio e Mariana!"
                    main.appendChild(div);
                    div.appendChild(section);
                    section.appendChild(imagem);
                    section.appendChild(ul);
                    ul.appendChild(li1);
                    ul.appendChild(li2);
                    ul.appendChild(li3);
                    ul.appendChild(li4);
                    li1.appendChild(a); 
                    

                    
            }; 

        };
    };
    
};





//------------------semana 11-------------

console.log(osMeusGatos);

for (i in osMeusGatos){
    let div = document.getElementById('div-sections');
    let section = document.createElement("section");
    let imagem = document.createElement("img");
    let ul = document.createElement("ul");
    let li1 = document.createElement ("li");
    let li2 = document.createElement ("li");
    let li3 = document.createElement ("li");
    let li4 = document.createElement ("li");
    let a = document.createElement ("a");
    section.setAttribute("id","section1");
    imagem.src = osMeusGatos[i].imagem;
    a.setAttribute("href", osMeusGatos[i].link);
    a.setAttribute("target","_blank");
    a.innerHTML = osMeusGatos[i].nome.toUpperCase()
    li1.innerHTML = `Nome: `
    li2.innerHTML = `Idade: ${osMeusGatos[i].idade}`;
    li3.innerHTML = `Cor: ${osMeusGatos[i].Cor}`;
    li4.innerHTML = "Responsável: Túlio e Mariana!"
    div.appendChild(section);
    section.appendChild(imagem);
    section.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    li1.appendChild(a);  

    

};

//-------------semana 12----------------

function busca(event){
    event.preventDefault()
    let input = document.getElementById("input").value.toLowerCase()
    if(input === ""){
        alert("Campo de busca vazio!")
    }else{
        document.getElementById("div-sections").remove()
        funcaoDeBusca(osMeusGatos, input);

    }
}


