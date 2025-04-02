class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // Criando métodos
        console.log(`${this.nome} está falando`);
    }
}

const p1 = new Pessoa("João", "Roberto") // Instanciando
console.log(p1);
p1.falar()
