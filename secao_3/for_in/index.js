/* 
FOR IN
Similiar ao for each de outras linguagens
*/

// Com array
const frutas = ['maça', 'manga', 'melão'];
for (let indexFruta in frutas) {
    console.log(frutas[indexFruta]);
}

// Com objeto
const pessoa = {
    nome: 'João',
    sobrenome: 'Roberto',
    idade: 19,
};
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}