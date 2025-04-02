class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

class Paciente extends Pessoa {
    constructor(nome, idade, sexo, cpf) {
        super(nome, idade, sexo)
        this.cpf = cpf
    }
}

class Medico extends Pessoa {
    constructor(nome, idade, sexo, crm) {
        super(nome, idade, sexo)
        this.crm = crm
    }
}

const p1 = new Paciente("João", 20, "M", "xxx.xxx.xxx-xx")
const m1 = new Medico("Ronaldo", 43, "M", "9999")
console.log(p1);
console.log(m1);
