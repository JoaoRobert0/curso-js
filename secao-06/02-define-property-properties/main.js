function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false,
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false,
        },

        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false,
        }
    })


    // Object.defineProperty(this, "estoque", {
    //     enumerable: true, // Mostra a chaves
    //     value: estoque, // valor
    //     writable: false, // pode alterar
    //     configurable: false // configuravel
    // })
}

const p1 = new Produto("Pipos", 4.30, 20);
console.log(p1.estoque);
console.log(p1);

console.log(Object.keys(p1));

