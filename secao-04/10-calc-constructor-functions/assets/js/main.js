function Calculadora() {
    console.log("Criando calculadora");

    this.display = document.querySelector(".display");

    this.clickBotao = function() {
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
    };

    this.adicionarNoDisplay = function (element) {
        this.display.value += element.innerText;
    };

    this.limparDisplay = function() {
        this.display.value = "";
    };

    this.deletarDisplay = function() {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizarCalculo = function() {
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


const calculadora = new Calculadora();
calculadora.clickBotao()