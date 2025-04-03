function rand(min = 1, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperarAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") {
            reject("Erro")
            return
        }
        setTimeout(() => {
            resolve({msg, tempo});
        }, tempo)
    })
}

async function executa() {
    try {
        const f1 = await esperarAi("fase 1", rand())
        console.log(f1);
        
        const f2 = await esperarAi("fase 2", rand())
        console.log(f2);

        const f3 = await esperarAi("fase 3", rand())
        console.log(f3);

        console.log("Promises encerradas");
    } catch(e) {
        console.log(e);
    }
}

executa()