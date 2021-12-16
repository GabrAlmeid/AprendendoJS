var numero1 = 1;
let numero2 = 2; //Acessível dentro do seu escopo 
const numero3 = [4]; //só pode ter um valor atribuido, Acessível dentro do seu escopo 

numero3.push(7);
numero2 = 7;


console.log(numero1);
console.log(numero2);
console.log(numero3);