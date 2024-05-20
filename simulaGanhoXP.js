// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada (String) para um valor numérico (int).
let num1 = parseInt(gets());
let num2 = parseInt(gets());

// Calcula a quantidade de XP ganho
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
console.log("Voce ganhou " + xpGanho + " XP!");
