const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const containerTag = document.querySelector('.container');
const divElementos = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const tagElement = document.createElement(tag);
    // tagElement.innerHTML = texto; Alternativas similares
    // tagElement.innerText = texto;
    const textoCriado = document.createTextNode(texto);

    tagElement.appendChild(textoCriado);
    divElementos.appendChild(tagElement);
}

containerTag.appendChild(divElementos);