const greetingElement = document.getElementById("greeting");

const today = new Date();

/**Verificando horário*/

if((today.getHours() > 4) && (today.getHours() < 12)){
    greetingElement.innerText = `Bom dia!`;
}
else if ((today.getHours() >= 12) && (today.getHours() < 19)) {
    greetingElement.innerText = `Boa tarde!`; 
}
else {
    greetingElement.innerText = `Boa noite!`;
}

//GRID INTELIGENTE

const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(( () => {

    const containerWidth = container.offsetWidth;
    containerWidth


    /**pegando um dos filhos do container (as celulas das colunas) */

    const cards = document.querySelector('.cards');
    heightCards = window.getComputedStyle(cards).height; //pegando a altura do card

    /**convertendo a altura para tipo numerico*/

    heightCards = parseInt(heightCards)

    const numColumns = Math.floor(containerWidth / heightCards); // pegando a quantidade de colunas dentro do container

    container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(180px, 1fr))`;
}))

observer.observe(container);

