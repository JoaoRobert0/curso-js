// Toda a function (exceto arrow funciton) tem uma variavel 
// especial chamada arguments, onde posso acessar qualquer 
// argumento
function funcao() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);
}
funcao(10, 20, 30, 40, 50);


// Valores padrão
// só será aplicado o valor default, quando o arg for undefined
function funcao2(n1, n2 = 0) {
    console.log(n1 + n2)
}
funcao2(20);

// Rest operator
function calcular(operador, acumulador, ...numeros) {
    if (operador === "+") {
        for (let num of numeros) {
            acumulador += num;
        }
    }
    if (operador === "-") {
        for (let num of numeros) {
            acumulador -= num;
        }
    }
    if (operador === "/") {
        for (let num of numeros) {
            acumulador /= num;
        }
    }
    if (operador === "*") {
        for (let num of numeros) {
            acumulador *= num;
        }
    }
    console.log(acumulador);
}
calcular("*", 2, 10, 20, 99, 45);
