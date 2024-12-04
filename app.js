let listaDeNumerosEscolhidos = [];
let limiteMaximoDeNumeros = 10
let numeroSecreto = gerarNumeroSecreto();

let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}


function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número de 1 a 10');
    
}

mensagemInicial();

function verificarChute (){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', `VOCÊ ACERTOU!!!`);
        palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        //seleciona o reiniciar em html e remove o atributo que desativava ele em html
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor...');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior...');
        }
        tentativa++;
        limparCampo();
        
    }
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * limiteMaximoDeNumeros + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosEscolhidos.length;

    if(quantidadeDeNumerosNaLista == limiteMaximoDeNumeros){
        listaDeNumerosEscolhidos = [];
    }

    if(listaDeNumerosEscolhidos.includes(numeroEscolhido)){
        return gerarNumeroSecreto;
    } else {
        console.log(listaDeNumerosEscolhidos)
        listaDeNumerosEscolhidos.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    //ao invés de remover o atributo de desativar do identificador reiniciar, eu estou colocando um atributo 
    document.getElementById('reiniciar').setAttribute('disabled', true);  
}