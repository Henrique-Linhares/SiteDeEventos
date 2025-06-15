const listaEventos = document.getElementById("listaEventos");
const dados = JSON.parse(localStorage.getItem("eventos")) || [];


window.addEventListener("DOMContentLoaded", () => {
    dados.forEach((item, index) => {
        const li = document.createElement("li");
        const div = document.createElement("div");
        li.innerText = `${index + 1}. ${item.title} | ${item.hora} | ${item.localizacao}`;
        listaEventos.appendChild(li);
    });
})