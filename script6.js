/* data de hoje
var d = new Date();

console.log(d);
*/


var d = new Date(2021, 07, 12, 22, 45);
var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

console.log (d);
console.log (dias [d.getDay()]);

var d2 = new Date(439992347952);
console.log (d2);
console.log (d2.setDate(28));
console.log (d2);

var d3 = new Date(1000 * 60 * 60 * 24);
console.log (d3);


var d4 = new Date("05/25/2000");
console.log (d4);

var d5 = new Date("Sep 30 2011 23:25");
console.log (d5);
