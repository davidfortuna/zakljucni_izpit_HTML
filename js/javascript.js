var menu = document.getElementsByClassName("menu")[0];
var menu_gumb = document.getElementsByClassName("meni-gumb")[0];

menu_gumb.onclick = function () {
    menu.classList.toggle("odprt");  
};