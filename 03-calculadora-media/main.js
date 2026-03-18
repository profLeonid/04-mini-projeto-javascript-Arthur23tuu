'use strict'

function calcularMedia() {
    let nota1 = Number(document.getElementById("n1").value)
    let nota2 = Number(document.getElementById("n2").value)
    let nota3 = Number(document.getElementById("n3").value)

    let resultadoM = document.getElementById("resultadomedia")
    let media = (nota1 + nota2 + nota3)/3

    resultadoM.classList.remove("verde","laranja","vermelho")

    let situacaoDoCaboclo 
    if (media >=7) {
        situacaoDoCaboclo = "Aprovado"
        resultadoM.classList.add("verde")
    }

    else if (media <5) {
        situacaoDoCaboclo  = "Reprovado"
        resultadoM.classList.add("vermelho")
    }

    else {
        situacaoDoCaboclo = "Recuperação"
        resultadoM.classList.add("laranja")
    }

    resultadoM.textContent = "A média final é " + media.toFixed(1) + "  -  " + situacaoDoCaboclo
}