/* FILTER


function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joyce", 34)
]

function maisde30(aluno){
    return aluno.idade > 30
}

function menosde30(aluno){
    return aluno.idade < 30
}

// let alunosMenorde30 = alunos.filter(maisde30)

// console.log(alunosMenorde30)

function filtro(callback){
    let alunosFiltrados = [];
    for (let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}

alunos.filtro = filtro

console.log(alunos.filtro(menosde30)) */


// MAP

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joyce", 34)
]

function nomeEidade(aluno){
    // return aluno.nome + " tem " + aluno.idade + " anos"
    return {name: aluno.nome,
            age: aluno.idade
        }
}

console.log(alunos.map(nomeEidade))


function daqui5anos(aluno){
    return {name: aluno.nome,
            age: aluno.idade + 5
        }
}

console.log(alunos.map(daqui5anos))
