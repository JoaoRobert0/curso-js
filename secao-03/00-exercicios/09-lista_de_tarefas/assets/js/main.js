function main() {
    const botao = document.querySelector('.btn-tarefa');
    const inputTarefa = document.querySelector('.input-tarefa');
    const listaDeTarefas = document.querySelector('.tarefas');
    
    function lerValorInput() {
        return inputTarefa.value;
    }
    
    function criarLi(valor) {
        const li = document.createElement('li');
        li.textContent = valor;
        return li
    }
    
    function criarBotaoApagar() {
        const botaonApagar = document.createElement('button');
        botaonApagar.textContent = 'Apagar tarefa'
        botaonApagar.classList.add('apagar');
        return botaonApagar
    }
    
    function adicionarTarefa(li) {
        li.appendChild(criarBotaoApagar());
        listaDeTarefas.appendChild(li);
        salvarTarefas();
    }
    
    function temTexto(valor) {
        return valor.trim() !== '';
    }

    function limparInput() {
        inputTarefa.value = '';
    }

    function salvarTarefas() {
        const liTarefas = listaDeTarefas.querySelectorAll('li');
        const tarefasTexto = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar tarefa', '');
            tarefasTexto.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(tarefasTexto);
        localStorage.setItem('tarefas', tarefasJSON);
    }
    
    botao.addEventListener('click', function (evento) {
        const valorInput = lerValorInput();
        if (temTexto(valorInput)) {
            const li = criarLi(valorInput); 
            adicionarTarefa(li);
            limparInput();
        }
    })

    // Quando usuario digita no input e aperta Enter
    document.addEventListener('keypress', function (evento) {
        if (evento.key === 'Enter') {
            const valorInput = lerValorInput();
            if (temTexto(valorInput)) {
                const li = criarLi(valorInput)
                adicionarTarefa(li);
                limparInput();
            }
        }
    })

    listaDeTarefas.addEventListener('click', function (evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('apagar')) {
            elemento.parentElement.remove();
            salvarTarefas();
        }
    })

    function adicionarTarefasSalvas() {
        let tarefas = localStorage.getItem('tarefas');
        tarefas = JSON.parse(tarefas);

        for (let tarefa of tarefas) {
            console.log(tarefa);
            const li = criarLi(tarefa);
            adicionarTarefa(li);
        }
    }
    adicionarTarefasSalvas();
}

main();
