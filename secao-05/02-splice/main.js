// Ação	Exemplo	Resultado
// Remover	arr.splice(1, 2)	Remove 2 elementos do índice 1
// Adicionar	arr.splice(1, 0, "X")	Insere "X" no índice 1
// Substituir	arr.splice(1, 1, "Y")	Substitui 1 elemento no índice 1 por "Y"
// Remover tudo a partir de um índice	arr.splice(2)	Remove tudo a partir do índice 2

// REMOVENDO ELEMENTOS
let frutas = ["Maçã", "Laranja", "Banana", "Manga"];
console.log(frutas);
let frutasRemovidas = frutas.splice(1, 2);
console.log(frutas) // ["Maçã", "Manga"]

// ADICIONANDO ELEMENTOS
frutas = ["Maçã", "Laranja", "Banana", "Manga"];
console.log(frutas); 
frutas.splice(2, 0, "Morango", "Abacaxi");
console.log(frutas); // ["Maçã", "Laranja", "Morango", "Abacaxi", "Banana", "Manga"]

// SUBSTITUINDO ELEMENTOS
frutas = ["Maçã", "Laranja", "Banana", "Manga"];
console.log(frutas);
frutas.splice(2, 1, "Pera");
console.log(frutas); // ["Maçã", "Laranja", "Pera", "Manga"]
