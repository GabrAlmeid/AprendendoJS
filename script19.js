
function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joyce", 34)
]

function idadeTurma(total, aluno){
    return total + aluno.idade;
}

console.log (alunos.reduce(idadeTurma, 0))