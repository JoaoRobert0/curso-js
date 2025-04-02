// Implemente uma função chamada esperar que recebe um tempo de espera em milissegundos e um callback. O callback deve ser executado após o tempo de espera.

// Objetivo:
// Usar o setTimeout para simular um atraso e executar o callback depois.

function esperar(milissegundos, callback) {
    setTimeout(callback, milissegundos)
}

esperar(5000, () => console.log("Eu sou o João"));

