// Closures, não conhecia esse termo até hoje
// Exemplo:

function criarMultiplicador(n) {
    function multiplicar(valor) {
        console.log(valor * n);
    }
    console.log("Multiplicador Iniciado");
    return multiplicar;
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadriplicar = criarMultiplicador(4);

dobrar(4); // 4 * 2
triplicar(0) // 0 * 3
quadriplicar(4) // 4 * 4