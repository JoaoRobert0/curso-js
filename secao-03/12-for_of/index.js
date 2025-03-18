/* 
FOR OF
Retorna o propio valor
*/

// Com array
const frutas = ['maça', 'manga', 'melão'];
for (let fruta of frutas) {
    console.log(fruta)
}

/* 
Com objeto, não funcionara pois não é iteravel
const pessoa = {
    nome: 'João',
    sobrenome: 'Roberto',
    idade: 19,
};
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
} */