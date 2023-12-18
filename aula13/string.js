// String no JS são indexadas. Cada caractere tem um indice.
// Para pegar um indice de uma string pode-se usar "console.log(umaString[7]);" ou "console.log(umaString.charAt(7));"

/* let umaString = 'Um \"texto\"';
   let umaString = 'Um \\"texto"'; */
//               01234567
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[7]);

// Concatenar usando concat
console.log(umaString.concat(' em', ' ', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString}' em um lindo dia.`);

// indexOf
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
// Expressão regular
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
// search aceita expressões regulares
console.log(umaString.search(/x/));
// replace aceita expressões regulares
console.log(umaString.replace('r', 'Outra'));
console.log(umaString.replace(/r/, 'Outra'));
console.log(umaString.replace(/r/g, '#'));
// length conta a quantidade de caracteres iniciando em zero;
console.log(umaString.length);
// slice -> passa o valor incial (start) e o valor final (end);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(2, -3));
console.log(umaString.slice(-3));
console.log(umaString.slice(-5)); //Pega a string inteira e substitui o valor repassado.
console.log(umaString.slice(-5, -1));
// substring só que não passa valores negativo
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
// split -> dividir uma string
console.log(umaString.split('r'));
console.log(umaString.split('r', 3));
// caixa de escrita maiúsula e minúscula
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
