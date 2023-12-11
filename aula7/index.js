// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Constantes não podem contar espaços ou traços, usamos camelCase
// Constantes são case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilizar VAR, utilizar CONST sempre.

// Não é possível alterar o valor de uma constante
/* const nome = 'João';
   nome = 'João';
   console.log(nome); */

// String = Text | Number = Número

// + - * / -->Tipos primitivos
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero);

console.log(typeof primeiroNumero); //Verifica que tipo de variável é.
console.log(typeof(primeiroNumero + segundoNumero)); //Verifica que tipo de variável é isolando a concatenação.