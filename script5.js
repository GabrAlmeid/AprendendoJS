
/* Propriedade

var aluno = { nome: "Gabriel", notas: [7.5, 5.0]};

console.log (aluno.notas[0]);

var novaProp = "sobrenome"

aluno.matricula = 12345
aluno[novaProp] = "Almeida"

console.log(aluno)

---------------------------------------------------------

var aluno = new Object ();

aluno.nome = "Gabriel"
aluno.notas = [7, 8];

console.log (aluno)
*/



/* Métodos

function calMed (){
    return (this.notas [0] + this.notas [1]) / 2
}


var aluno = {
    nome: "Gabriel",
    notas: [7, 10],

    media: calMed
}


var aluno2 = {
    nome: "Maria",
    notas: [8, 6],

    media: calMed
}


console.log (aluno.nome);
console.log (aluno.media());

console.log (aluno2.nome);
console.log (aluno2.media());
*/




/* Construtores

function criarAluno (nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criarAluno ("Gabriel", 8, 9),
    criarAluno ("João", 8, 4),
    criarAluno ("Joana", 10, 7)


]

var aluno = turma[2];

turma.forEach(function (elemento){
    console.log (elemento)
}
) 

----------------------------------------
*/

function aluno(nome, n1, n2){

    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2

    this.media = function media(){
        return (this.nota1 + this.nota2) / 2; 
    }
}

var a = new aluno ("Gabriel", 8, 9);
var b = new aluno ("João", 6, 9);

console.log(b);



