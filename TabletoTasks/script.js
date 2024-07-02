function adicionarItem() {
    var Tarefa = document.getElementById("tarf").value
    var Descriçao = document.getElementById("desc").value

    var registro = new Date()
    dt = registro

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var novaLinha = tabela.insertRow(tabela.rows.length)
    var celulaTarefas = novaLinha.insertCell(0)
    var celulaDescriçao = novaLinha.insertCell(1)
    var celulaData = novaLinha.insertCell(2)

    celulaDescriçao.innerHTML = Descriçao
    celulaTarefas.innerHTML = Tarefa
    celulaData.innerHTML = FormatarData(new Date())

document.getElementById("tarfas").value = ""
document.getElementById("descrição").value = ""
}

function FormatarData(item) {
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    return item.toLocaleString("pt-BR", options)
}

function criararquivoExcel(){
    var tabela = document.getElementById("tabela")
    var nomeArquivo = "tabela_tarefas.xlsx"
    var wb = XLSX.utils.table_to_book(tabela, { sheet:"Taks Table"})
    XLSX.writeFile(wb, nomeArquivo)
}