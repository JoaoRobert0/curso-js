// Crie uma função chamada executarDepoisDe que recebe um tempo em milissegundos e uma função de callback. A função de callback deve ser chamada após o tempo especificado.

// Objetivo:
// Usar o setTimeout para esperar o tempo especificado e depois executar o callback.

function executarDepoisDe(milissegundos, callback) {
    setTimeout(callback, milissegundos)
}

function meme() {
    for(let i = 0; i < 10; i++) {
        console.log("Eu sou o Douglas");   
    }
}

executarDepoisDe(2000, meme);