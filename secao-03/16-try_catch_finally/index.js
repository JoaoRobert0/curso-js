// TRY, CATCH E FINALLY

function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        console.log(`Resultado: ${a / b}`);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    } finally {
        console.log("Operação de divisão finalizada.");
    }
}

dividir(10, 2);  // Saída: Resultado: 5 / Operação de divisão finalizada.
dividir(10, 0);  // Saída: Erro: Não é possível dividir por zero / Operação de divisão finalizada.
