const formCadastro = document.getElementById("form");
const titulo = document.getElementById("title-input");
const data = document.getElementById("data-input");
const hora = document.getElementById("time");
const localizacao = document.getElementById("localizacao");
const descricao = document.getElementById("descricao");
const selectCategorias = document.getElementById("selectCategorias");
const imagem = document.getElementById("image");

function validarTitulo() {
  if (titulo.value.length < 3) {
    titulo.style.border = "2px solid red";
    return false;
  } else {
    titulo.style.border = "2px solid green";
    return true;
  }
}

function validarHora() {
  if (!hora.value) {
    hora.style.border = "2px solid red";
    return false;
  } else {
    hora.style.border = "2px solid green";
    return true;
  }
}

function validarLocalizacao() {
  if (localizacao.value.length < 5) {
    localizacao.style.border = "2px solid red";
    return false;
  } else {
    localizacao.style.border = "2px solid green";
    return true;
  }
}

function validarDescricao() {
  if (descricao.value.length < 10) {
    descricao.style.border = "2px solid red";
    return false;
  } else {
    descricao.style.border = "2px solid green";
    return true;
  }
}

function validarCategoria() {
  if (selectCategorias.selectedIndex === 0) {
    selectCategorias.style.border = "2px solid red";
    return false;
  } else {
    selectCategorias.style.border = "2px solid green";
    return true;
  }
}



function dadosEventos() {
  const dados = {
    title: titulo.value,
    data: data.value,
    hora: hora.value,
    localizacao: localizacao.value,
    descricao: descricao.value,
    categoria: descricao.value,
    image: imagem.value,
  };

  let listaEventos = JSON.parse(localStorage.getItem("eventos")) || [];
  listaEventos.push(dados);

  localStorage.setItem("eventos", JSON.stringify(listaEventos));
}

formCadastro.addEventListener("submit", (event) => {
    const validacoes = [
        validarTitulo(),
        validarHora(),
        validarLocalizacao(),
        validarDescricao(),
        validarCategoria(),
    ];

    if (validacoes.includes(false)) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
  event.preventDefault();
  dadosEventos();
  window.location.href = "./eventos.html";
});
