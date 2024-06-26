var nomeGlobal
var mensagemGlobal
var dateGlobal

function formatar(date) {
    var options = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return date.toLocaleString("pt-BR", options)
}

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value
    var mensagem = document.getElementById("mensagem").value
    var date = new Date()

    nomeGlobal = nome
    mensagemGlobal = mensagem
    dateGlobal = date

    document.getElementById("confNome").textContent = nome
    document.getElementById("confMsg").textContent = mensagem
    document.getElementById("confDate").textContent = formatar(date)
}
enviar(nome, mensagem, date)



function enviar() {
    console.log(nomeGlobal, mensagemGlobal, dateGlobal)
}

function enviar() {
    var numeroTelefone = "5541991029233"

    var linkWhatsapp = "https://wa.me/" +
        numeroTelefone +
        "?text-NOME DO RECEPTOR(A): " +
        nomeGlobal + " - " +
        mensagemGlobal +
        "- " +
        formatar(dateGlobal)

    window.open(linkWhatsapp, "_blank")
}

