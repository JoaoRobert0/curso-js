// IIFE: Immediately Invoked Function Expression
// São funções que criamos e são invocadas automaticamente
// Diminuir a poluição no escopo global

(function() {
    console.log("Chamei um IIFE");
})();

console.log("Função escopo global");
