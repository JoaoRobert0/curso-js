// Criando um novo Map
const notas = new Map();

// Adicionando alguns alunos e suas notas
notas.set('João', 7.5);
notas.set('Maria', 9.0);
notas.set('Pedro', 6.0);

console.log(notas);

// Acessando notas
console.log(`Nota do João: ${notas.get('João')}`); // 7.5
console.log(`Nota da Maria: ${notas.get('Maria')}`); // 9.0
console.log(`Nota do Pedro: ${notas.get('Pedro')}`); // 6.0

// Atualizando a nota do Pedro
notas.set('Pedro', 8.0);
console.log(`Nova nota do Pedro: ${notas.get('Pedro')}`); // 8.0

// Verificando se um aluno está na lista
console.log(`Maria está na lista? ${notas.has('Maria')}`); // true
console.log(`José está na lista? ${notas.has('José')}`); // false

// Removendo um aluno da lista
notas.delete('João');
console.log(`João está na lista? ${notas.has('João')}`); // false

// Iterando sobre o Map
console.log('Notas finais:');
for (let [aluno, nota] of notas) {
    console.log(`${aluno}: ${nota}`);
}

// Limpando todas as entradas do Map
notas.clear();
console.log(`Alunos após limpar: ${notas.size}`); // 0
