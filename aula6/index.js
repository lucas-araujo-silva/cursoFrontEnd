// Variáveis precisam ter nomes significativos
let n = 'João'; // "n" é uma variável estranha pois não tem significado
console.log(n);

let nomeCliente = 'João'; // Assim sabemos o que essa variável referencia de valor
console.log(nomeCliente);

// Não pode começar o nome de uma variável com um número
let nome;

// Variáveis não podem contar espaços ou traços, usamos camelCase
let nomeAluno = 'Raul';
let nomeCompletoDoCliente = 'José';
console.log(nomeCompletoDoCliente);

// Variáveis são case-sensitive
let nomePai = 'Luiz';
let nomepai = 'Otávio';
console.log(nomePai);
console.log(nomepai);

// Não podemos redeclarar variáveis com let
let nomeDoador = 'Luiz';
nomeDoador = 'Otávio';
console.log(nomeDoador);

// Não utilizar VAR, utilizar LET sempre.

// Não podemos criar variáveis com palavras reservadas
// Exempos: 
/*   
  let let;
  let if;
 */

/* let nome; // Declarou a variável
nome = 'Joaõ'; // Inicializando a variável
console.log(nome);
nome = 'Otávio';
console.log(nome);

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');  */