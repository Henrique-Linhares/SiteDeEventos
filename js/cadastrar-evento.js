const formCadastro = document.getElementById("form");
const titulo = document.getElementById("title-input");
const data = document.getElementById("data-input");
const hora = document.getElementById("time");
const localizacao = document.getElementById("localizacao");
const descricao = document.getElementById("descricao");
const selectCategorias = document.getElementById("selectCategorias");
const imagem = document.getElementById("image");


function dadosEventos() {
    const dados = {
        title: titulo.value,
        data: data.value,
        hora: hora.value,
        localizacao: localizacao.value,
        descricao: descricao.value,
        categoria: descricao.value,
        image: imagem.value
    };

    let listaEventos = JSON.parse(localStorage.getItem("eventos")) || [];
    listaEventos.push(dados);

    localStorage.setItem("eventos", JSON.stringify(listaEventos));
}

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    dadosEventos();
    window.location.href = "./eventos.html"

})