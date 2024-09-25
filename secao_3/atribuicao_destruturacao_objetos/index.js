/* 
DESTRUTURAÇÃO VIA OBJETOS
*/

const pessoa = {
    nome: 'João',
    // sobrenome: 'Roberto',
    idade: 30,
    endereco: {
        rua: 'Av Salgado',
        numero: 120
    }
};

const { nome, sobrenome = 'Sem sobrenome' } = pessoa;
console.log(pessoa);
console.log(nome, sobrenome);
const { endereco ,endereco: { rua, numero } } = pessoa;
console.log(endereco);
console.log(rua, numero);