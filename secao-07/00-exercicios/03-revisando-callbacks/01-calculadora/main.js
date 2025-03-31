// Crie uma função chamada operar, que recebe dois números e uma função de callback que realiza uma operação matemática com esses números. Você deve implementar pelo menos três funções de operação (soma, subtração e multiplicação).

// Objetivo:
// Criar uma função operar que recebe dois números e uma função de operação (callback).

// Implementar funções como soma, subtração e multiplicação para passar como callback.

function operar(n1, n2, callback) {
    console.log("Função operar chamada");
    return callback(n1, n2);
}

function multiplicacao(x, y) {
    return x * y;
}

console.log(operar(3, 2, (n1, n2) => n1 + n2)) // Ex 1: Usando arrow function
console.log(operar(10, 20, function(a, b) { // Ex 2: Usando função anonima
    return a - b
}));
console.log(operar(10, 10, multiplicacao)); // Ex 3: Usando uma função já declarada
