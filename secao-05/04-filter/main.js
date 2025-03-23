// Filter
const numeros = [10, 3, 11, 2, 9, 27, 42, 90, 0, 7]
// const numerosMaior = []
// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > 10) {
//         numerosMaior.splice(numerosMaior.length - 1, 0, numeros[i]);
//     }
// }
// console.log(numerosMaior);

const numerosFilter = numeros.filter(valor => valor > 10);
console.log(numerosFilter);

const pessoas = [
    {nome: "João", idade: 20},
    {nome: "Fernando", idade: 32},
    {nome: "Enzo", idade: 52},
    {nome: "Maria", idade: 62},
    {nome: "Juliana", idade: 80},
    {nome: "Luiz", idade: 36},
];
const f1 = pessoas.filter(value => value.nome.length > 5);
const f2 = pessoas.filter(value => value.idade > 50);
const f3 = pessoas.filter(value => value.nome[value.nome.length - 1].toLowerCase() === 'a');

console.log(f1);
console.log(f2);
console.log(f3);
