/*  Promisses

let usuarios = ["Anna", "Gabriel", "Eduardo"];

function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){

    setTimeout(() => {
        usuarios.push(nome)
        let error = true;

        if(!error){
            resolve();
        }
        else{
            reject({msg:"Erro"})
        }
    }, 1000);

})
return promise; 
}

function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("Camila")

.then(listarUsuarios)
.catch((error) =>{
    console.log(error.msg)
})
*/

let usuarios = ["Anna", "Gabriel", "Eduardo"];

function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){

    setTimeout(() => {
        usuarios.push(nome)
        let error = false;

        if(!error){
            resolve();
        }
        else{
            reject({msg:"Erro"})
        }
    }, 1000);

})
return promise; 
}

function listarUsuarios(){
    console.log(usuarios)
}

async function executar(){

    await inserirUsuario("Maria")
    listarUsuarios();

}
executar();