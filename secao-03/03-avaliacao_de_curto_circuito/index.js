/* 
Avaliação de Curto Circuito
Valores Falsy (valores em Js que são considerados falsos)
    false
    0
    '' "" ``
    null
    undefined
    Nan
Qualquer valor que não seja falsy é considerado truthy
*/

// Valores padrão: Usamos a avaliação de curto-circuito para atribuir valores padrão a variáveis.
let nomeUsuario = "";
let nomeCompleto = nomeUsuario || "Nome Padrão";
console.log(nomeCompleto)
nomeUsuario = "João";
nomeCompleto = nomeUsuario || "Nome Padrão";
console.log(nomeCompleto)

// Execução condicional: Usamos && para executar código condicionalmente, sem um bloco if.
let usuario = {nome: "João"};
usuario && console.log(usuario.nome);  // "João"

