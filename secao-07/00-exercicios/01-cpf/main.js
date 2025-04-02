class CPF {
    static validar(cpf) {
        cpf = this.limparCaracteres(cpf);
        cpf = this.cpfNumerico(cpf)
        
        const digitos = []
        digitos.push(this.calcDigitoVerificador(cpf))
        digitos.push(this.calcDigitoVerificador(cpf, digitos[0]))

        return cpf[9] === digitos[0] && cpf[10] === digitos[1]
    }

    static limparCaracteres(cpf) {
        return cpf.replace(/\D+/g, "")
    }

    static cpfNumerico(cpf) {
        cpf = Array.from(cpf)
        cpf.map(
            (valor, indice) => 
            cpf[indice] = parseInt(cpf[indice])
        )
        return cpf
    }

    static calcDigitoVerificador(cpf, primeiroDigito) {
        let somatorio = 0
        
        if (typeof primeiroDigito === "number") {
            let j = 11
            for(let i = 0; i < 9; i++) {
                somatorio += cpf[i] * j
                j--;
            }
            somatorio += primeiroDigito * j    
        } else {
            let j = 10
            for(let i = 0; i < 9; i++) {
                somatorio += cpf[i] * j
                j--;
            }
        }

        let resultado = 11 - (somatorio % 11)
        if (resultado > 9) resultado = 0
        
        return resultado
    }
}

const cpf = CPF.validar("147.832.644-14")
console.log(cpf);
