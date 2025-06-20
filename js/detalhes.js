import { dataEventos } from './events-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const eventos = JSON.parse(localStorage.getItem("eventos")) || dataEventos;
    const idSelecionado = localStorage.getItem("eventoSelecionadoId");

    const evento = eventos.find(e => e.id === idSelecionado);

    if (!evento) {
        document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:2rem;'>Evento não encontrado.</h2>";
        return;
    }

    document.getElementById('evento-titulo').textContent = evento.title;
    document.getElementById('evento-data').textContent = formatarData(evento.date);
    document.getElementById('evento-horario').textContent = evento.time;
    document.getElementById('evento-local').textContent = evento.location;
    document.getElementById('evento-descricao').textContent = evento.description;
    document.getElementById('evento-categoria').textContent = evento.category;
    document.getElementById('evento-imagem').src = evento.image;
});

function formatarData(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

document.getElementById("botao-voltar").addEventListener("click", () => {
  window.location.href = "eventos.html"; // ou a página correta da lista
});
