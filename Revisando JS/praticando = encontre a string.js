//Criar um método para ler propriedades de um objeto
//Exibir somente as propriedades em string

const filme = {
    titulo : "Harry Potter e a pedra filosofal",
    ano : 2001,
    criador : "J.K Rowling",
    personagem : "Snape"
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
    if(typeof obj[prop] === "string")
    console.log(prop,obj[prop])
}