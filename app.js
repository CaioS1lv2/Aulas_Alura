let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag) {
    let campo = document.querySelector('tag')
    campo.innerHTML = Text;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
    console.log('o botão foi clicado!');
}
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}