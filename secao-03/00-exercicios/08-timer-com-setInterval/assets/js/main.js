const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let intervalo;
let ligado = false;


function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // Converter ms para s
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


function inicarRelogio() {
    segundos++;
    relogio.innerHTML = criarHoraDosSegundos(segundos);
}

document.addEventListener('click', function (e) {
    const elemento = e.target;
    console.log(elemento);

    if (elemento.classList.contains('iniciar')) {
        if (!ligado) { // Se estiver desligado, execute
            intervalo = setInterval(inicarRelogio, 1000);
            ligado = true;
            relogio.style.color = 'green';
        }
    }

    if (elemento.classList.contains('pausar')) {
        relogio.style.color = 'red';
        ligado = false; // Desligar
        clearInterval(intervalo);
    }

    if (elemento.classList.contains('zerar')) {
        relogio.style.color = 'black';
        ligado = false; // Desligar
        clearInterval(intervalo);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    }
})

// Menos performático para página, o exemplo abaixo:

// iniciar.addEventListener('click', function (event) {
//     if (!ligado) { // Se estiver desligado, execute
//         intervalo = setInterval(inicarRelogio, 1000);
//         ligado = true;
//         relogio.style.color = 'green';
//     }
// });


// pausar.addEventListener('click', function(event) {
//     relogio.style.color = 'red';
//     ligado = false; // Desligar
//     clearInterval(intervalo);
// });


// zerar.addEventListener('click', function(event) {
//     relogio.style.color = 'black';
//     ligado = false; // Desligar
//     clearInterval(intervalo);
//     segundos = 0;
//     relogio.innerHTML = '00:00:00';
// });