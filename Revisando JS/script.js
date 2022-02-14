/* Variaveis


let idade = 7;
console.log(idade)
let altura = 180
console.log(altura)
*/


/*Constantes 


const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto)
*/


/* Tipos Primitivos - Referencia


let nome = "Gabriel";            //string
let idade = 25;                 //number
let aprovado = true;           //boolean
let sobrenome = undefined;    //undefined
let corSelecionado = null    //redefinir um valor
*/


/* Objeto  


let pessoa = {
    nome: "Gabriel",          
    idade: 25,                
    aprovado: true,       
    sobrenome: "Almeida"
} console.log(pessoa)
*/


/* Arrays


let familia = [26, 45, 50, 17, "Gabriel", true];
console.log(familia[3])
*/


/* Function


let corSite = "Blue"

function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade
}
console.log(corSite)
resetaCor("Red", "dark")
console.log(corSite)

//tarefa que não retorna nada

function dizerNome(){
    console.log("Gabriel")
}
dizerNome();

//com retorno

function multiplicarPorDois(valor){
    return valor* 2;
}
console.log(multiplicarPorDois(5));
*/


/* Operadores Aritiméticos | +, -, *, /, **


let salario = 100
console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(5 ** 5)
// ++ = incremento  -- = decremento
let idade = 18
console.log(++idade)
console.log(idade--)
console.log(idade)
*/


/*Operadores de Atribuição


let valorTecladoGamer = 100
valorTecladoGamer += valorTecladoGamer
console.log(valorTecladoGamer)
*/


/*Operadores de Comparação


console.log(1 == 1)
console.log('1' ==+ 1)
console.log(1 != 1)
console.log(1 !== 1)
console.log(1 > 3)
console.log(1 < 1)
console.log(1 >= 1)
console.log(1 <= 1)
*/


/*Operador Ternário


let pontos = 100
let tipo = pontos >= 100 ? "premium" : "comum"
console.log(tipo)
*/


/* Operadore Logico e (&&)


//Retorna true se os dois operandos forem true

let maiorIdade = true
let carteiraTrabalho = true
let podeAplicar = maiorIdade && carteiraTrabalho
console.log(podeAplicar)
*/


/*Operador Logico ou (||)


//Retorna true se um dos operandos forem true

let maiorIdade = true
let carteiraTrabalho = true
let podeAplicar = maiorIdade || carteiraTrabalho
console.log(podeAplicar)

//Operador NOT (!)

let candidatoRecusado = !podeAplicar
console.log(candidatoRecusado)
*/


/* Operador Logico não boolean


//Falsy = undefined, null, 0, false, '', NaN - not a number
//Truthy = qualquer coisa ao contrario do Falsy

let corPersonalizada = "Vermelho"
let corPadrao = "Azul"
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)
*/


/* If .. Else - Condicionais


// se a hora estiver entre as 06:00 até 12:00 = Bom dia
// se estiver entre 12:00 até 18:00 = Boa noite
// se não = Boa noite

let hora = 20

if ( *condição* hora > 6 && hora < 12) {
    *codigo a ser executado*
    console.log("Bom dia")
} else if (hora > 12 && hora < 18){
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}
*/


/* Switch case - Condicionais


let permissao = ' '

switch (permissao){
    case 'comum':
        console.log("Usuario comum");
    break;  

    case 'gerente':
        console.log("Usuario gerente");
    break;  

    case 'diretor':
        console.log("Usuario diretor");
    break;

    default:
        console.log("Usuario não reconhecido")
}
*/


/* Loop - for


for(let i = 1; i <= 5; i++){

    console.log("Estou aprendendo!", i)

    // if(i % 2 !== 0){
    //     console.log(i)
    // }
}
*/


/* Loop - while


let i = 5

while (i >= 1){

    if(i % 2 !== 0){
         console.log(i)
     }
     i--
}
*/


/* Loop - Do..While


let i = 1;

do {
    console.log("digitando...", i)
    i++;
} while (i <= 10)
*/


/* Loop - For..In


const pessoa = {
    nome: "Gabriel",
    idade: "20"
}

for(let key in pessoa) {
    console.log(key,pessoa.nome)
}

const cores = ["Vermelho", "Azul", "Verde"];

for (let indice in cores) {
    console.log(indice,cores[indice])
}
*/


/* Loop - For..of


const cores = ["Vermelho", "Azul", "Verde"];

for (let cor of cores){
    console.log(cor)
}
*/


/* Factory Functions


function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular("Iphone", 6.1, 3500)
console.log(celular1)
*/


/* Constructor Functions


function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...")
    }
}

const celular = new Celular("Asus", 5.5, 5000)
console.log(celular)
*/


// Natureza dinamica de objetos


const mouse = {
    cor : "red",
    marcar : "dazz"
}
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log("mudando DPI")
}
delete mouse.velocidade
console.log(mouse)




