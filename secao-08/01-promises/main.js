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

esperarAi("Frase 1", rand(1, 5))
.then(resposta => {
    console.log(resposta)
    return esperarAi("Frase 2",  rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperarAi(12,  rand(1, 3))
})
.then(resposta => console.log(resposta))
.catch(erro => {
    console.log(erro);
})
console.log("Antes da promise");
