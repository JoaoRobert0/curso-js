function validarCPF(cpf) {
    const arrayLimpo = paraArray(limparCPF(cpf))

    const numeros = arrayLimpo.map(function(v, i) {
        return Number(arrayLimpo[i])
    })
    
    const digitos = []
    digitos.push(primeiroDigito(numeros))
    digitos.push(segundoDigito(numeros, digitos[0]))
    
    return numeros[9] === digitos[0] && numeros[10] === digitos[1]
}

function primeiroDigito(cpf) {
    let somatorio = 0
    
    j = 10
    for(let i = 0; i < 9; i++) {
        somatorio += cpf[i] * j
        j--;
    }
    
    let resultado = 11 - (somatorio % 11)
    if (resultado > 9) resultado = 0
    
    return resultado
}

function segundoDigito(cpf, primeiroDigito) {
    let somatorio = 0
    
    j = 11
    for(let i = 0; i < 9; i++) {
        somatorio += cpf[i] * j
        j--;
    }
    somatorio += primeiroDigito * j    
    
    let resultado = 11 - (somatorio % 11)
    if (resultado > 9) resultado = 0
        
    return resultado
}

function limparCPF(cpf) {
    return cpf.replace(/\D+/g, "")
}

function paraArray(cpfLimpo) {
    return Array.from(cpfLimpo)
}

const cpf = "746.824.890-71"
const eValido = validarCPF(cpf)
console.log(eValido); // True
