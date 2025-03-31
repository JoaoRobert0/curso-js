// Crie uma função chamada filtrar que recebe um array de números e uma função de callback para determinar se o número deve ser incluído no novo array. A função de callback deve retornar true ou false dependendo de um critério.

// Objetivo:
// Filtrar elementos de um array usando um callback para determinar quais elementos incluir.

function filtrar(array, callback) {
    const novoArray = []

    for (let i = 0; i < array.length; i++) {
        const valor = array[i]
        if (callback(valor)) {
            novoArray.push(valor)
        }
    }

    return novoArray
}

function ePar(valor) {
    return valor % 2 == 0
}

console.log(filtrar([1, 2, 3, 4, 5], ePar));
