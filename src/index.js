import css from "./style.css"
import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js";
import loadAbout from "./about.js";

//Event listener for document load
document.addEventListener("DOMContentLoaded", function() {
    loadHome();
    contentAnimation()
});

//Event listeners for nav buttons
const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

function clearPage() {
    //Enable all buttons again
    for (const button of buttons) {
        button.disabled = false;
    }
    const page = document.querySelector(".page");
    content.removeChild(page);
}

function contentAnimation() {
    content.classList.remove("load");
    setTimeout(function() {
        content.classList.add("load");
    }, 1);
}

buttons[0].addEventListener("click", () => {
    clearPage();
    loadHome();
    contentAnimation();
    buttons[0].disabled = true;
});
buttons[1].addEventListener("click", () => {
    clearPage();
    loadMenu();
    contentAnimation();
    buttons[1].disabled = true;
});
buttons[2].addEventListener("click", () => {
    clearPage();
    loadContact();
    contentAnimation();
    buttons[2].disabled = true;
});
buttons[3].addEventListener("click", () => {
    clearPage();
    loadAbout();
    contentAnimation();
    buttons[3].disabled = true;
});


