// Crie uma função chamada filtrarStrings que recebe um array de strings e uma função de callback. O callback deve verificar se a string tem mais de 5 caracteres e, em caso afirmativo, deve ser incluída no array resultante.

// Objetivo:
// Filtrar strings com base no comprimento, usando um callback.

function filtrarStrings(array, callback) {
    const novoArray = []

    for (let i = 0; i < array.length; i++) {
        const valor = array[i]
        if (callback(valor)) {
            novoArray.push(valor)
        }
    }

    return novoArray
}

const produtos = ["banana", "maça", "pera", "laranja"]
console.log(filtrarStrings(produtos, (valor) => valor.length > 5));
