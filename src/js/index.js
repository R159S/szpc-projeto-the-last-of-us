const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => { //o primeiro é a funcionalidade do clique, o segundo, o indice
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado() //remove uma class selecionada
        selecionarBotaoCarrossel(botao)
        esconderBotaoSelecionado()
        mostrarImagemDeFundo(indice)
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa')
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado')
}

function esconderBotaoSelecionado() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

