var pessoa = {
    nome: "José Almeida",
    idade: 32
}

var contato = {
    telefone: 11911111111,
    email: "Josealmeida@email.com"
}

var copia = {...pessoa, cidade: "Belo Horizonte", ...contato}
copia.idade = 88;

console.log(pessoa)
console.log(copia)


var notasT1 = [10, 7, 7, 4];
var notasT2 = [6, 5, 9, 10];

var todasT = [...notasT1, ...notasT2]

console.log(todasT)