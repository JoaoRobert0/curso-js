function Carro(cor, modelo, ano) {
    // Atributos
    this.cor = cor;
    this.modelo = modelo;
    this.ano = ano;

    this.metodo = () => {
        console.log(this);
        console.log("Sou um metodo");
    }
} 

const c1 = new Carro("azul", "corsa", 2006);
const c2 = new Carro("vermelho", "opala", 1998);
console.log(c1);
c1.metodo();
