function interagir(nome) {
    return {
        agradecer() {
            console.log(`Obrigado, ${nome}`)
        },
        xingar() {
            console.log(`Ai dento ${nome}`);
            
        }
    }
}

const antonio = interagir("antonio");
const alex = interagir("alex");

alex.xingar();
alex.agradecer();

antonio.agradecer();
antonio.xingar();