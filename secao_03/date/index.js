/* 
Obejto Date
*/

const date = new Date();
console.log(date); // irá exbiri a data de acordo com o UTC
console.log(date.toLocaleString()); // de acordo com o local onde eu estiver

// Criação de Data
const agora = new Date(); // Data e hora atuais
const dataEspecifica = new Date('2024-09-24'); // Data específica no formato ISO
const dataComHora = new Date(2024, 8, 24, 10, 30); // Ano, mês (0-indexado), dia, hora, minuto
