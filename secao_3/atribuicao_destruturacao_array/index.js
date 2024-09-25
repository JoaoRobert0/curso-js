/* 
DESTRUTURAÇÃO VIA ARRAY
*/

// A atribuição por desestruturação em JavaScript é uma maneira concisa de extrair valores de arrays
// Exemplo 1: Desestruturação simples de um array
const numeros = [10, 20, 30, 40, 50];
const [primeiro, segundo, terceiro] = numeros;
console.log('Exemplo 1:', primeiro, segundo, terceiro); // 10 20 30

// Exemplo 2: Pulando valores do array
const [primeiroNum, , terceiroNum] = numeros;  // Pular o segundo valor
console.log('Exemplo 2:', primeiroNum, terceiroNum); // 10 30

// Exemplo 3: Usando valores padrão ao desestruturar
const valores = [100];
const [x = 1, y = 2, z = 3] = valores;  // x = 100, y = 2, z = 3 (valor padrão)
console.log('Exemplo 3:', x, y, z);  // 100 2 3

// Exemplo 4: Desestruturação com rest operator
const [primeiroElem, segundoElem, ...resto] = numeros;  // Os outros valores vão para "resto"
console.log('Exemplo 4:', primeiroElem, segundoElem);  // 10 20
console.log('Exemplo 4 (resto):', resto);  // [30, 40, 50]

// Exemplo 5: Desestruturação aninhada de arrays
const coordenadas = [[10, 20], [30, 40]];
const [[x1, y1], [x2, y2]] = coordenadas;
console.log('Exemplo 5:', x1, y1, x2, y2);  // 10 20 30 40

// Exemplo 6: Desestruturação de arrays retornados por uma função
function retornaArray() {
  return ['maçã', 'banana', 'laranja'];
}
const [fruta1, fruta2] = retornaArray();
console.log('Exemplo 6:', fruta1, fruta2);  // maçã banana
