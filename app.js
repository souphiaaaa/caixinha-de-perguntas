function criarCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    let respostaEstaVisivel = false
    function viraCartao(){
  respostaEstaVisivel = !respostaEstaVisivel

    }
    
    let respostaEstaVisivel = true
    cartao.className = 'cartao'
    cartao.innerHTML = `
<div class="cartao_conteudo">
<h3>Dead by Daylight</h3>
<div class="cartao_conteudo_pergunta">
<p>O que é tunelar?</p>
</div>
<div class="cartao_conteudo_resposta">
<p>É quando o killer foca em uma só pessoa em vez de perseguir os outros players.</p>
</div>
</div>
`



  container.appendChild(cartao)
}