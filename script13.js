
// let dobro = x => 2 * x; Arrow Function

// let dobro = () => 2 * this.x; Arrow function não reconhece o this, e o bind não funciona

let dobro = function(){
    return 2 * this.x;
}

let numero = {
    x: 6,
    d: dobro
}

console.log(numero.d());