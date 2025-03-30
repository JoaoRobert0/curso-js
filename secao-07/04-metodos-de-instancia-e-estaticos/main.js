class Contador {
    static total = 0; // Variável estática

    static incrementar() {
        this.total++;
    }

    static getTotal() {
        return this.total;
    }
}

const contador1 = new Contador();
console.log(contador1.total); // undefined
// console.log(contador1.getTotal()); // Erro
Contador.incrementar();
console.log(Contador.getTotal());

