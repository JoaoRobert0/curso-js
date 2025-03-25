function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log("Operação Invalida");
        return
    }
    this.saldo -= valor
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
}
Conta.prototype.verSaldo = function() {
    console.log(`R$${this.saldo}`);
    return this.saldo
}

const c1 = new Conta(20, 3, 500)
c1.verSaldo()
c1.depositar(200)
c1.verSaldo()
c1.sacar(400)
c1.verSaldo()

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;


Conta.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log("Operação Invalida");
        return
    }
    this.saldo -= valor
}

const cc1 = new CC(20, 40, 0, 100)
console.log(cc1);
cc1.sacar(99)
cc1.verSaldo()
cc1.sacar(1)
cc1.verSaldo()
cc1.sacar(1)


