// Basic CSS Nav Menu
var roundButton = document.querySelector("#roundButton")
var Slidenav = document.querySelector("#navbar")

roundButton.addEventListener("click", showMenu, false)
navbar.addEventListener("click", hideMenu, false)

function showMenu(e) {
    navbar.classList.add("show")
    document.body.style.overflow = "hidden"
}
function hideMenu(e) {
    navbar.classList.remove("show")
    e.stopPropagation();
    document.body.style.overflow = "auto"
}