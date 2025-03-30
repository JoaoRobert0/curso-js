const _velocidade = Symbol()
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== "number") return
        if(valor > 100 || valor < 0) return
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if ( this[_velocidade] >= 100) return;
         this[_velocidade]++;
    }

    desacelerar() {
        if ( this[_velocidade] <= 0) return;
         this[_velocidade]--;
    }
}

const c1 = new Carro("Civic")
console.log(c1);
for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}
console.log(c1._velocidade); // Invisivel
console.log(c1.velocidade);
c1.velocidade = 43;
console.log(c1.velocidade);
