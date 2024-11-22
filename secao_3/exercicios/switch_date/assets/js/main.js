const dataElement = document.querySelector('#data-atual');
dataElement.innerHTML = getDataAtual();

function getDataAtual () {
    let dataTexto = '';

    const data = new Date();
    const dia = data.getDate();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    switch (diaSemana) {
        case 0:
            dataTexto += 'domingo,';
            break;
        case 1:
            dataTexto += 'segunda-feira,';
            break;
        case 2:
            dataTexto += 'terça-feira,';
            break;
        case 3:
            dataTexto += 'quarta-feira,';
            break;
        case 4:
            dataTexto += 'quinta-feira,';
            break;
        case 5:
            dataTexto += 'sexta-feira,';
            break;
        case 6:
            dataTexto += 'sábado,';
            break;
    }

    dataTexto += ` ${dia}`
    
    switch (mes) {
        case 0:
            dataTexto += ' de janeiro de';
            break;
        case 1:
            dataTexto += ' de fevereiro de';
            break;
        case 2:
            dataTexto += ' de março de';
            break;
        case 3:
            dataTexto += ' de abril de';
            break;
        case 4:
            dataTexto += ' de maio de';
            break;
        case 5:
            dataTexto += ' de junho de';
            break;
        case 6:
            dataTexto += ' de julho de';
            break;
        case 7:
            dataTexto += ' de agosto de';
            break;
        case 8:
            dataTexto += ' de setembro de';
            break;
        case 9:
            dataTexto += ' de outubro de';
            break;
        case 10:
            dataTexto += ' de novembro de';
            break;
        case 11:
            dataTexto += ' de dezembro de';
            break;
    }

    dataTexto += ` ${ano} ${hora < 10 ? `0${hora}` : hora}:${minuto < 10 ? `0${minuto}` : minuto}`

    return dataTexto;
}