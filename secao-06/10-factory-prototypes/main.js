const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const comer = {
    comer() {
        console.log(this);
        console.log(`${this.nome} está comendo`);
    }
}

pessoaPrototype = Object.assign({}, falar, comer, beber)
function criarPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome, enumerable: true},
        sobrenome: {value: sobrenome, enumerable: true},
    })
}

const p1 = criarPessoa("João", "Roberto")
const p2 = criarPessoa("Maria", "Antonia")
console.log(p1, p2);

