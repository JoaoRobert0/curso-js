// Filtrar pares
// Dobrar eles
// Somatório

const numeros = [10, 4, 5, 9, 12, 4, 90, 5];
const resultado = numeros.filter(v => v % 2 === 0)
.map(v => v * 2)
.reduce((pv, cv) => pv + cv);
console.log(resultado);