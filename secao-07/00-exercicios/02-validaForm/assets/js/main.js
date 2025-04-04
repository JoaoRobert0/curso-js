class ValidaFormulario {
    constructor() {
        this.form = document.querySelector(".formulario")
        this.validarForm()
    }
    
    validarForm() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault()
            this.limparErros();
    
            let erros = 0
            for (const node of document.querySelectorAll(".validar")) {
                erros += this.validarInput(node)
            }
    
            if (erros == 0) {
                alert("Formulario enviado")
                this.form.submit()
            } else {
                alert("Corrija formulario")
            }
        })
    }
    
    limparErros() {
        document.querySelectorAll(".error-text").forEach(erro => erro.remove());
    }
    
    isVazio(element) {
        return element.value === ""
    }
    
    criarErrorText(textContent) {
        const p = document.createElement('p');
        p.textContent = textContent;
        p.classList.add("error-text");
        return p
    }
    
    senhasIguais() {
        return document.querySelector(".senha").value === document.querySelector(".repetir-senha").value
    }
    
    validarInput(inputElement) {
        let erros = 0
        const labelText = inputElement.previousElementSibling.textContent;
    
        if (this.isVazio(inputElement)) {
            inputElement.parentNode.insertBefore(this.criarErrorText(`O campo ${labelText} está vazio.`), inputElement.nextSibling);
            erros++;
        }
    
        if (inputElement.classList.contains("usuario")) {
            if (inputElement.value.length < 3 || inputElement.value.length > 12 ) {
                inputElement.parentNode.insertBefore(this.criarErrorText(`${labelText} precisa ter entre 3 e 12 caracteres.`), inputElement.nextSibling);
                erros++;
            }
    
            const regex = /^[a-zA-Z0-9]+$/
            if (!regex.test(inputElement.value)) {
                inputElement.parentNode.insertBefore(this.criarErrorText(`Nome de ${labelText} precisar conter apenas letras e/ou números.`), inputElement.nextSibling);
                erros++;
            }
        }
    
        if (inputElement.classList.contains("cpf")) {
            if (!CPF.validar(inputElement.value)) {
                inputElement.parentNode.insertBefore(this.criarErrorText(`CPF inválido.`), inputElement.nextSibling);
                erros++;
            }
        }
    
        if (inputElement.classList.contains("senha")) {
            if (inputElement.value.length < 6 || inputElement.value.length > 12 ) {
                inputElement.parentNode.insertBefore(this.criarErrorText(`${labelText} precisa ter entre 6 e 12 caracteres.`), inputElement.nextSibling);
                erros++;
            }
    
            if (!this.senhasIguais()) {
                inputElement.parentNode.insertBefore(this.criarErrorText(`Campos senha e repetir senha precisar ser iguais.`), inputElement.nextSibling);
                erros++;
            }
        }
    
        if (inputElement.classList.contains("repetir-senha")) {
            if (!this.senhasIguais()) {
                inputElement.parentNode.insertBefore(this.criarErrorText(`Campos senha e repetir senha precisar ser iguais.`), inputElement.nextSibling);
                erros++;
            }
        }
    
        return erros
    }
}


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

const vf = new ValidaFormulario;
console.log(vf);
