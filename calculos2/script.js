function somar() {
    var n1 = parseFloat(document.getElementById("so1").value)
    var n2 = parseFloat(document.getElementById("so2").value)
    var n3 = parseFloat(document.getElementById("so3").value)
    var n4 = parseFloat(document.getElementById("so4").value)
    var n5 = parseFloat(document.getElementById("so5").value)
    var resposta = document.getElementById("respSoma")
    var res = n1 + n2 + n3 + n4 + n5

    if (res > 30) {
        resposta.textContent = res
        resposta.style.color = "green"
        resposta.style.backgroundColor = "lightsalmon"
    } else {
        resposta.textContent = res;
        resposta.style.color = "red"
        resposta.style.backgroundColor = "lime"
    }
}


function multi() {
    var mult1 = parseFloat(document.getElementById("mult1").value)
    var mult2 = parseFloat(document.getElementById("mult2").value)
    var res = document.getElementById("respMulti")
    var respmu = (m1 * m2) / 5

    if (resposta >= 45) {
        document.getElementById("modal").style.display = "flex"
        // alert("Meia Idade!!")
    } else {
        document.getElementById("modal").style.display = "flex"
        // alert("Ainda Jovem!!")
    }
}

function erro() {
    document.getElementById("modal").style.display = "nome"
}

function imc(){
    var n1 = parseFloat(document.getElementById("imc1").value)
    var n2 = parseFloat(document.getElementById("imc2").value)
    var resposta = document.getElementById("respDiv")
    var respIMC = n1 / (n2*n2)
    resposta = respIMC
}