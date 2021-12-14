/*
function media(n1,n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    console.log (media);

}
media(6,7);
media(8,8);
*/

/*
function media(n1,n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
   
    return media;
}

var resultado1 = media(6,7);
var resultado2 = media(8,8);

console.log (resultado1 + " e " + resultado2)
*/

/*
function saudacao() {

    return "Hello Word!"
}

var s = saudacao;
console.log (s())
*/

/*
function media(n1,n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
   
    return media;
}

var resultado = media(6,7);
var m = media;

var resultado2 = m(2,3);

console.log (resultado)
console.log (resultado2)
*/

//Função anonima

var media = function(n1,n2){

    return (n1 + n2) /2;
}

console.log ( media (5,6));

//Arrow

var media = (n1,n2) => {

    return (n1 + n2) /2;
}

console.log ( media (5,6));

