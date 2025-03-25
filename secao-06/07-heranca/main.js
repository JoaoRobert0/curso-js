function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor
}

Produto.prototype.desconto = function(valor) {
    this.preco -= valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(porcetagem) {
    this.preco = this.preco + (this.preco * porcetagem / 100);
}

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco)
    this.material = material
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Caneca.prototype.saudacao = function() {
    console.log("Olá sou uma caneca com o nome " + this.nome)
}

const produto = new Produto("Generico", 40)
produto.aumento(40)
console.log(produto);

const camiseta = new Camiseta("Sueter", 62)
camiseta.aumento(100)
console.log(camiseta);

const caneca = new Caneca("Te amo Pai", 20, "Diamante")
caneca.saudacao()
console.log(caneca);

