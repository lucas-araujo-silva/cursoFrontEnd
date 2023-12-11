/** 
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * * multiplicação 
 * / divisão 
 * ** Potenciação
 * % Retorna o resto da divisão
 */ 

const num1 = 10;
const num2 = 3;
console.log('Adição: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Potenciação: ' + (num1**num2));
console.log('Mod ou Resto da divisão: ' + (num1 % num2));


let contador = 1;
//Operador de inclemento;
contador++; // Pós incremento (Primeiro executa a ação e depois exibe o valor);
++contador; // Pré incremento (Primeiro incrementa o valor depois executa a ação);

//Operador de decremento;
let contador = 10;
contador--; // Pós incremento (Primeiro executa a ação e depois exibe o valor);
--contador; // Pré incremento (Primeiro incrementa o valor depois executa a ação);
console.log(contador);

// Operadores de atribuição
let contador = 0;
contador += 2; // contador = contador + 2;
contador -= 2; // contador = contador - 2;
contador *= 2; // contador = contador * 2;
contador /= 2; // contador = contador / 2;
contador **= 2; // contador = contado ** 2;

// NaN - Not a number;
const num1 = 10;
const num2 = 'Luiz';
console.log(num1 * num2);

// Conversão de string em número
const num1 = 10;
const num2 = parseInt('5.9');
const num3 = parseFloat('5.9');
const num4 = Number('5.5');
console.log(num1 + num2 + num3 + num4);