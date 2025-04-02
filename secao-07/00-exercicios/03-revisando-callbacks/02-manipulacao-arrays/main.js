// Crie uma função chamada processarArray que recebe um array de números e uma função de callback. O callback será usado para modificar cada número do array de alguma forma (por exemplo, multiplicando cada número por 2, somando um valor a todos, etc.).

// Objetivo:
// Criar uma função processarArray que aplica a transformação de cada número no array com um callback.

function processarArray(array, callback) {
    console.log("Chamando a função processar Array");

    const novoArray = [...array]
    for(let i = 0; i < novoArray.length; i++) {
        novoArray[i] = callback(novoArray[i])
    }

    return novoArray
}

console.log(processarArray([1, 2, 3, 4], valor => valor * 2))