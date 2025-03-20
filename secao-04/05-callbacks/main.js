// Um callback é uma função que é passada como argumento para 
// outra função e é chamada quando algum processo ou ação é 
// completado.

function beberAgua(callback) {
    console.log("Estou bebendo uma agua");
    callback();
}

function guardarCopo() {
    console.log("Copo guardado");
}

beberAgua(guardarCopo);