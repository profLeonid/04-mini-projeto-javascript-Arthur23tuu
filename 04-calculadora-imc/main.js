'use strict'

function calcularIMC() {
    let vulgo = String(document.getElementById("nome").value)
    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("peso").value)

    let resultIMC = document.getElementById("resultadoIMC")
    let IMC = peso / (altura * altura)

    resultIMC.classList.remove("Abaixo-Peso","Peso-Normal","Sobrepeso","Obesidade-grau-I","Obesidade-grau-II","Obesidade-grau-III")

    let situacao 
    if (IMC <18.5) {
        situacao = "Abaixo do peso"
        resultIMC.classList.add("Abaixo-Peso")
    }

    else if (IMC <25) {
        situacao  = "Peso normal"
        resultIMC.classList.add("Peso-Normal")
    }

    else if (IMC <30) {
        situacao = "Sobrepeso"
        resultIMC.classList.add("Sobrepeso")
    }

    else if (IMC <35) {
        situacao = "Obesidade grau I"
        resultIMC.classList.add("Obesidade-grau-I")
    }

    else if (IMC <40) {
        situacao = "Obesidade grau II"
        resultIMC.classList.add("Obesidade-grau-II")
    }

    else {
        situacao = "Obesidade grau III"
        resultIMC.classList.add("Obesidade-grau-III")
    }

    
    resultIMC.textContent = "O IMC de " + vulgo + " é " + IMC.toFixed(2) + " - " + situacao
}