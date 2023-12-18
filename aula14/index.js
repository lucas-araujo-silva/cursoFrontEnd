// IEEE 754 - 2008 - Por conta deste padrão temos imprecisões em resultados de calculos numericos.
let num1 = 0.7; // Number
let num2 = 0.1; // Number

// console.log(num1.toString() + num2);
// console.log(typeof num1);
// console.log(num1.toFixed(2));
// let temp = num2;
// console.log(Number.isInteger(temp));
// console.log(Number.isNaN(temp));

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.0
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.5
num1 += num2; // 2.0

num1 = parseFloat(num1.toFixed(2));
 // ou 
num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));


// Atender a precisão sem usar as funções e usandos calculos, mas a melhor maneira é usando funções!
let num3 = 0.7; // Number
let num4 = 0.1; // Number

num3 = ((num3 * 100) +(num4 * 100)) / 100; // 0.8
num3 = ((num3 * 100) +(num4 * 100)) / 100; // 0.9
num3 = ((num3 * 100) +(num4 * 100)) / 100; // 1.0

console.log(num3);
console.log(Number.isInteger(num3));

// Atendendo a precisão usando o toFixed().
let num5 = 0.7;
let num6 = 0.1;

num5 = Number(num5.toFixed(2));

console.log(num6.toFixed(2));
console.log(Number.isInteger(num5));