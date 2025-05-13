// Criando variáveis
const hamburguer = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const sairMenu = document.querySelector(".sair-menu");

// Função para ativar o menu
function menuFuncao() {
  nav.classList.add("active");
  sairMenu.style.display = "block";
}

// Evento para o ícone do menu hambúrguer
hamburguer.addEventListener("click", menuFuncao);

// Função para fechar o menu
function sairMenuFuncao() {
  nav.classList.remove("active");
}

// Evento para o ícone X
sairMenu.addEventListener("click", sairMenuFuncao);

// Sumir com o menu quando a tela for maior que 1000px
window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    sairMenu.style.display = "none";
    nav.classList.remove("active");
  }
});
