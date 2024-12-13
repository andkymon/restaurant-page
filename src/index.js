import css from "./style.css"
import loadHome from "./home.js"
import loadMenu from "./menu.js"

//Event listener for document load
document.addEventListener("DOMContentLoaded", function() {
    loadHome();
});

//Event listeners for nav buttons
const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

function clearPage() {
    const page = document.querySelector(".page");
    content.removeChild(page);
}

buttons[0].addEventListener("click", () => {
    clearPage();
    loadHome();
});
buttons[1].addEventListener("click", () => {
    clearPage();
    loadMenu();
});


