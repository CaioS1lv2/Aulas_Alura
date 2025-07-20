// let title = document.querySelector(' h1');
// title.innerHTML =  'Jogo do número secreto';

// let paragraph = document.querySelector(' p');
// paragraph.innerHTML = 'Escolha um número de 1 a 10';
let numeroSecreto = gerarNúmeroAleatório();

function exibirTextoNaTela(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

exibirTextoNaTela(' h1', 'Jogo do número secreto');
exibirTextoNaTela(' p', 'Escolha um número de 1 a 10');


function verificarChute() {
    console.log('O botão foi clicado!');
}

function gerarNúmeroAleatório() {
    return parseInt(Math.random() * 10 + 1);
} 