let numerosSorteados = [];
let numLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTexto (tag,msg) {
    let campo = document.querySelector(tag);
    campo.innerHTML = msg;
}

mensagemInicial();

function verificarChute () { 
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Você ganhou!');
        let palavraTentativa = tentativas > 1 ? "tentativas": "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número é menor');
        } else {
            exibirTexto('p', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    }

};

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Escolha um número de 1 a ${numLimite}`);
}
function novoJogo () {
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1 );
    let qtdElementos = numerosSorteados.length;

    if (qtdElementos == numLimite) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numEscolhido);
        return numEscolhido;
    }
   
    
}

