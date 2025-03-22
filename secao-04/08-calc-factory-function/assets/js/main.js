function criarCalculadora() {
    console.log("Criando calculadora");

    return {
        display: document.querySelector(".display"),

        clickBotao() {
            document.addEventListener("click", (event) => {
                const element = event.target;
            
                if (element.classList.contains("btn-num")) {      
                    this.adicionarNoDisplay(element);  
                }
                else if (element.classList.contains("btn-clear")) {
                    this.limparDisplay();
                }
                else if (element.classList.contains("btn-del")) {
                    this.deletarDisplay();
                } else if (element.classList.contains("btn-eq")) {
                    this.realizarCalculo();
                }
            })
        },

        adicionarNoDisplay(element) {
            this.display.value += element.innerText;
        },

        limparDisplay() {
            this.display.value = "";
        },

        deletarDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizarCalculo() {
            try {
                let resultado = eval(this.display.value);

                if (resultado) {
                    this.display.value = String(resultado);
                } else {
                    alert("Conta inválida");
                }
            } catch (e) {
                alert("Conta inválida");
            }
        }
    }
}

const calculadora = criarCalculadora();
calculadora.clickBotao()