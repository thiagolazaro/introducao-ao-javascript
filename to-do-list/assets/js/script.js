var itemTarefa = document.getElementById("itemTarefa");
var listaTarefa = document.getElementById("listaTarefa");

function adicionaTarefa() {
    if (itemTarefa.value != "") {
        var tarefa = document.createElement("li");
        tarefa.innerHTML = itemTarefa.value;
        listaTarefa.appendChild(tarefa);
        itemTarefa.value = "";
    }
}