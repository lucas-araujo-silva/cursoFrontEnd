/*
Lucas Araújo Silva tem 28 anos, peso 70 kg
tem 1.7 de altura e se IMC é de 25.92592259259259
Lucas nasceu em 1995
*/

const nome = 'Lucas Araújo';
const sobrenome = 'Silva'
const idade = 28;
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const peso = 70;
const alturaEmMetros = 1.70;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;


indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = anoAtual - idade;

// concatenando usando " + "
/* console.log(nome + ' ' + sobrenome + ' tem ' + idade  + ' anos, pesa  ' + peso + ' kg'); 
console.log('tem', alturaEmMetros, 'de altura e seu IMC é de', indiceMassaCorporal); //
console.log(nome, 'nasceu em', anoNascimento,'.');
 */

// Usando temaplate strings (A maneira melhor e mais mordena de usar)
console.log(`${nome} ${sobrenome} tem idade anos, pesa ${peso} kg`); // concatenando usando " + "
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`); 
console.log(`${nome} nasceu em ${anoNascimento}.`);