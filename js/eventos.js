import { dataEventos } from './events-data.js';

const listaEventos = document.getElementById("listaEventos");
let dados = JSON.parse(localStorage.getItem("eventos")) || [];  

if (dados.length === 0) {
    dados = dataEventos;
}

window.addEventListener("DOMContentLoaded", () => {

    console.log(dados);
    dados.forEach((item, index) => {

        const card = document.createElement("div");
        card.classList.add("card-evento")

        if (item.image) {
            const imagem = document.createElement("img");
            imagem.src = item.image; 
            imagem.alt = item.title;
            imagem.style.width = "100%";
            imagem.style.height = "150px";
            imagem.style.objectFit = "cover";
            imagem.style.borderRadius = "10px";
            card.appendChild(imagem);
        }

        const titulo = document.createElement("h1");
        titulo.textContent = item.title;
        titulo.classList.add("titulo-evento")

        const date = new Date(item.date); 

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;

        const data = document.createElement("p");
        data.textContent = `Data: ${formattedDate}`;

        const hora = document.createElement("p");
        hora.textContent = `Hora: ${item.time}`; XMLDocument

        const local = document.createElement("p");
        local.textContent = `Local: ${item.location}`;

        const buttonDetalhes = document.createElement("button");
        buttonDetalhes.textContent = `Ver mais`;
        card.classList.add("buttonDetalhes");

     
        card.appendChild(titulo);
        card.appendChild(hora);
        card.appendChild(data);
        card.appendChild(local);
        card.appendChild(buttonDetalhes);

        listaEventos.appendChild(card);
    });

})