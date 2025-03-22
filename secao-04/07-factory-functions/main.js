// Factory function
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        sobreMim() {
            return `
            Meu nome é ${this.nomeCompleto},
            minha idade é ${idade}
            meu peso é ${this.peso}
            `
        },
        peso: 80,

        // Setter 
        set nomeCompleto(dados) {
            this.nome = dados[0];
            this.sobrenome = dados[1];
        },

        // Getter
        get nomeCompleto() {
            return this.nome + " " + this.sobrenome
        }
    }
}

const p1 = criarPessoa("João", "Roberto", 20);
console.log(p1.sobreMim());
p1.nomeCompleto = ["Fenardo", "Cruz"]
console.log(p1.sobreMim());
