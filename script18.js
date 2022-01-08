var aluno = {
    matricula: 12345,
    nome: "Gabriel",
    telefone: 911111111,
    cidade: "Belo Horizonte"
}

// var {matricula, nome, telefone} = aluno;

// console.log(matricula)
// console.log(nome)

// var {...copia} = aluno;
// copia.matricula = 54321
// console.log(copia)
// console.log(aluno)

var aluno2 = {
    matricula: 11345,
    nome: "Gabriela",
    telefone: 911111121,
    cidade: "Belo Horizonte"
}

var aluno3 = {
    matricula: 11445,
    nome: "José",
    telefone: 911112121,
    cidade: "Belo Horizonte"
}

var alunos = [aluno, aluno2, aluno3]

var [ Gabriel,...outros] = alunos

console.log(Gabriel)
console.log(outros)
