function Produto(nome, preco, estoque) {
    let estoquePrivado = estoque

    Object.defineProperty(this, "estoque", {
        enumerable: true, // Mostra a chaves
        configurable: true, // configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== "number") {
                console.log("Erro ao setar valor");
                return;
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto("Pipos", 4.30, 20);
console.log(p1.estoque);
p1.estoque = "Coca Cola";
p1.estoque = 40;
console.log(p1.estoque)
