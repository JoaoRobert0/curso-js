const frutas = ["banana", "maçã", "pera"];
const frutasCopia = [...frutas];

frutas.pop();

console.log(frutas);
console.log(frutasCopia);

console.log(frutas.length);

delete frutasCopia;

console.log(frutas);
frutas.shift();
console.log(frutas);

frutas.push("laranja");
console.log(frutas);

frutas.unshift("mamão");
frutas.push("uva");
frutas.push("morango");
console.log(frutas);

const duasFrutas = frutas.slice(0, 2);
console.log(duasFrutas);

const nome = "João Roberto Chaves";
console.log(nome.split(" "));

const nome2 = ["Antonio", "Carlos", "Eduardo"];
console.log(nome2.join(" "))
