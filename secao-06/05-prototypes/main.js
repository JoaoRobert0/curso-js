function Quadrado(c, l) {
    this.cor = c
    this.lado = l
}

Quadrado.prototype.area = function() {
    return this.lado * this.lado
}

const q1 = new Quadrado("Azul", 10)

console.log(q1.area())
