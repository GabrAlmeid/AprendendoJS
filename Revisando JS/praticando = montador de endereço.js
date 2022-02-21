
let endereço = {
    rua: "Raimundo Mattiuzzo",
    cidade: "São Paulo",
    cep: 3735000
};

function exibirEndereço(endereço) {
    for (let chave in endereço)
    console.log(chave, endereço[chave])
}

exibirEndereço(endereço);