// setInterval e setTimeout

function helloWorld(nome) {
    console.log(`Hello World, by ${nome}`);
}

// Apenas será executado após 10 segundos de forma assincrona
setTimeout(helloWorld, 10000, 'Helena');
// Apenas será executado após 2 segundos de forma assincrona
setTimeout(helloWorld, 2000, 'João');

function mostrarHora() {
    const tempoAtual = new Date();
    return tempoAtual.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// A cada 1 segundo irá ser chamado
setInterval(function () {
    console.log(mostrarHora())
}, 1000);