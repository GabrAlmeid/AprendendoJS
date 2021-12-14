var nota1 = 8;
var nota2 = 8;

var media = (nota1 + nota2) / 2; 
var conceito= ""

if (media >= 8){
    conceito = "Otimo"
}

else if (media >= 6.5){
    conceito = "Bom"
}

else {
    conceito = "Regular"
}

console.log (media);
console.log (conceito);

switch (conceito){
    case "Otimo":
        console.log("Parabéns, você é um otimo aluno!")
        break;
    case "Bom":
        console.log("Você está quase perfeito!")
        break;
    case "Regular":
        console.log("Estude mais!")
        break;
    default:
        console.log("Houve algum erro")
        break;
}