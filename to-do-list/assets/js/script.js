var itemTarefa = document.getElementById("itemTarefa");
var listaTarefa = document.getElementById("listaTarefa");

function adicionaTarefa() {
    if (itemTarefa.value != "") {
        var tarefa = document.createElement("li");
        itemTarefa.value = upperCase(itemTarefa.value);
        tarefa.innerHTML = itemTarefa.value;
        listaTarefa.appendChild(tarefa);
        itemTarefa.value = "";
        itemTarefa.focus();
    }
}

function upperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
}