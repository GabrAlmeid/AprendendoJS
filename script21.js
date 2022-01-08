let nome = ""


try{

    if(nome == ""){
        throw "o nome não pode ser vazio"
    }

console.log(nome)
} 
catch (err){

    console.log("Houve um erro", err)
} 
// finally {
//     console.log("Boa noite")
// }

console.log("Boa noite")
