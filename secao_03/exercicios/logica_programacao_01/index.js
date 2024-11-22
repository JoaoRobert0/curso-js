// Escreva uma função que receba 2 números e retorne o maior deles

function maior_de_dois(x, y) {
    if (x > y) return x;
    return y;
}
console.log(maior_de_dois(1,2));


// Usando arrow functions
const maior = (x, y) => x > y ? x : y;
console.log(maior(9, 4))