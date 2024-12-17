/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'*/

let listaDeNumerosSorteados = [];
let dificuldade = 100;
let tentativas = 1;

function alterarTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    alterarTextoNatela('h1', 'Jogo do Número Secreto');
    alterarTextoNatela('p', `Escolha um número entre 1 e ${dificuldade}`);
}

exibirMensagemInicial()


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        alterarTextoNatela('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
        alterarTextoNatela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        if (chute > numeroSecreto) {
            alterarTextoNatela('p', `O número secreto é menor que ${chute}`)
        } else {
            alterarTextoNatela('p', `O número secreto é maior que ${chute}`)
        }
        limparCampo()
    }
}

//Numero Aleatorio
function gerarNumeroAleatorio(maximo) {
    let numeroEscolhido = parseInt(Math.random() * maximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == maximo) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(maximo)
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        
        return numeroEscolhido;
    }
}

let numeroSecreto = gerarNumeroAleatorio(dificuldade);

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(dificuldade);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
