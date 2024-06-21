function somar() {
    var n1 = parseFloat(document.getElementById("so1").value)
    var n2 = parseFloat(document.getElementById("so2").value)
    var resposta = document.getElementById("respSoma")
    resposta.textContent = n1 + n2
}

function sub() {
    var n1 = parseFloat(document.getElementById("sub1").value)
    var n2 = parseFloat(document.getElementById("sub2").value)
    var resposta = document.getElementById("respSub")
    resposta.textContent = n1 - n2
}

function multi() {
    var n1 = parseFloat(document.getElementById("multi1").value)
    var n2 = parseFloat(document.getElementById("multi2").value)
    var resposta = document.getElementById("respMulti")
    resposta.textContent = n1 * n2
}

function div() {
    var n1 = parseFloat(document.getElementById("div1").value)
    var n2 = parseFloat(document.getElementById("div2").value)
    var resposta = document.getElementById("respDiv")
    resposta.textContent = n1 / n2
}

function media() {
    var n1 = parseFloat(document.getElementById("m1").value)
    var n2 = parseFloat(document.getElementById("m2").value)
    var n3 = parseFloat(document.getElementById("m3").value)
    var media = document.getElementById("respMedia")
    var res = (n1 + n2 + n3) / 3


if (res >= 7) {
    media.textContent = res.toFixed(1)
    media.style.color = "red"
    media.style.backgroundColor = "lightgreen"
    media.style.width = "70px"
    media.style.textAlitgn = "center"
    media.style.padding = "10px"
    media.style.borderRadius = "20px"
} else {
    media.textContent = res;
    media.style.color = "red"
    media.style.backgroundColor = "linghtpink"
    media.style.width = "70px"
    media.style.textAlign = "center"
    media.style.padding = "10px"
    media.style.borderRadius = "20px"
}

}

function contar(){
    const num = parseFloat($("#numeroInput").val())
    
    var resultadoStr = ""

    if(num <= 100){
        for(var cont = 1; cont <= num; cont++){
            resultadoStr= resultadoStr + cont + "<br>"
        }
        $("#result").html(resultadoStr)
    }else{
            $("#result").text("Digite um número menor ou igual a 100")
    }
}