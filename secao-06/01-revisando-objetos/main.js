// Como criar objetos
const p1 = { // Literal
    nome: "João",
    sobrenome: "Roberto"
}

// Como acessar as keys
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1["nome"]); // Acessar dinamicamente
console.log(p1["sobrenome"]);

const p2 = new Object(); // Construtor
p2.nome = "Luiz";
p2.sobrenome = "Otávio";
console.log(p2.nome, p2.sobrenome);

delete p2.sobrenome;
console.log("Sobrenome removido:", p2.nome, p2.sobrenome);

p1.falarNome = function() {
    console.log(`${this.nome} está falando`)
};
p1.falarNome();

for (let keys in p1) {
    console.log(keys, p1[keys]);
}

// Gerar objetos
// Factory or Constructor functions
function criarPessoa(n, s) {
    return {
        nome: n,
        sobrenome: s,
        nomeCompleto() {
            console.log(this.nome + " " + this.sobrenome);
        }
    }
}

const p3 = criarPessoa("Maria", "Clara");
p3["nomeCompleto"]();

function Pessoa(n, s) {
    this.nome = n;
    this.sobrenome = s;
}

const p4 = new Pessoa("Luiz", "Antonio");
console.log(p4);
