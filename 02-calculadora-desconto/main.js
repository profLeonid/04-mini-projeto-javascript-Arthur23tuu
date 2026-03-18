'use strict'
function calcularDesconto() {

  let preco = document.getElementById("preco").value
  let desconto = document.getElementById("desconto").value
  let resultado = document.getElementById("resultado")

  let valorDesconto = preco * (desconto / 100)
  let precoFinal = preco - valorDesconto

  resultado.textContent = 
  "Economizou: R$ " + valorDesconto + " | Final: R$ " + precoFinal

  resultado.classList.remove("cor-verde", "cor-marrom", "cor-vermelho")

  if (desconto <= 5) {
    resultado.classList.add("cor-verde")
  } 
  else if (desconto <= 10) {
    resultado.classList.add("cor-marrom")
  } 
  else {
    resultado.classList.add("cor-vermelho")
  }
}
