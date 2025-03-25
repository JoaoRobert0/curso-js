const produto = {
    nome: "Caneca",
    preco: 23
}
const produto2 = { 
    ...produto, // Copia um objeto literalmente
    estoque: null // E adiciona uma nova chave
}
produto2.preco = 50
const produto3 = Object.assign(
    {},
    produto2,
    {outroAtributo: null}
)
console.log(produto, produto2, produto3)

// Retornar as chaves
console.log(Object.keys(produto3))

// Congelar objetos
Object.freeze(produto3);
Object.freeze(produto3)
produto3.estoque = 100 // Não irá mudar o valor
console.log(produto3);

// Vê detalhes de uma propiedade (atributo)
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
// Todas as propiedades
console.log(Object.getOwnPropertyDescriptors(produto));

// Valores de um objeto
console.log(Object.values(produto));

// Chave e valor
console.log(Object.entries(produto));

