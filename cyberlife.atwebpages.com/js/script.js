document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("texto").classList.add("visible");
    }, 1000); // Atraso de 1 segundo (1000 milissegundos)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};