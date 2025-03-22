// Declaração de função (function hoisting)
function sayHello() {
    console.log("HELLO!");
}
sayHello();

// Function expression
const meChamoJoao = function() {
    console.log("Me chamo João");
}
meChamoJoao();

// Arrow function
const arrowFunc = () => {
    console.log("Sou uma arrow function");
}
arrowFunc();

// Em objetos
const obj = {
    falar: function() {
        console.log("Falando");
    },
    chorar() {
        console.log("Chorando");
    }
}
obj.falar();
obj.chorar();