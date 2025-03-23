// Map

// Dobrar os números
const numeros = [10, 3, 11, 2, 9, 27, 42, 90, 0, 7];
const numerosDobrados = numeros.map(v => v * 2);
console.log(numerosDobrados);

const pessoas = [
    {nome: "João", idade: 20},
    {nome: "Fernando", idade: 32},
    {nome: "Enzo", idade: 52},
    {nome: "Maria", idade: 62},
    {nome: "Juliana", idade: 80},
    {nome: "Luiz", idade: 36},
];
const nomes = pessoas.map(v => v.nome);
console.log(nomes);

const idades = pessoas.map(v => {
    return {idade: v.idade};
});
console.log(idades);

const addId = pessoas.map((v, i) => {
    const newValue = {...v}
    newValue.id = i;
    return newValue;
})
console.log(addId);

console.log(pessoas);
