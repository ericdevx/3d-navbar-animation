const hamburguer_menu = document.querySelector(".hamburguer-menu");
const container = document.querySelector(".container");

hamburguer_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})