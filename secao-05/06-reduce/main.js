const numeros = [10, 20, 30, 40];
const sum = numeros.reduce((acumulador, valor, indice) => {
    return acumulador += valor
}, 0);
console.log(sum);

const pessoas = [
    {nome: "João", idade: 20},
    {nome: "Fernando", idade: 32},
    {nome: "Enzo", idade: 52},
    {nome: "Maria", idade: 62},
    {nome: "Juliana", idade: 80},
    {nome: "Luiz", idade: 36},
];
const maisVelha = pessoas.reduce(function(acumulador, obj) {
    return obj.idade > acumulador.idade ? obj : acumulador;
})
console.log(maisVelha)