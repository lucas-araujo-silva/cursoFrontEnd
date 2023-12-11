let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/* varA = varB; // B */
/* varB = varC; // C */
/* varC = varA; // B */

// Jeito antigo de resolver;
/* const varATemp = varA;
varA = varB;     // B
varB = varC;     // C
varC = varATemp; // B */

// Jeito mais moderno de resolver;
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);