function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperarAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject("Erro")
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

// all, race, resolve, reject
const promises = [
    esperarAi("Promise 1", 3000),
    esperarAi("Promise 2", 2000),
    esperarAi("Promise 3", 1500),
]

Promise.all(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  })

Promise.race(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  })

function baixarPagina() {
    const emCache = false

    if (emCache) {
        return Promise.resolve("Pagina em cache")
    } else {
        return esperarAi("baixei a pagina", 6000)
    }
}

baixarPagina()
  .then((dados) => console.log(dados))
  .catch((error) => console.log(error))