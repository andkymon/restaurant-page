import css from "./style.css"
import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js";
import loadAbout from "./about.js";

(function () {
    //Event listeners for nav buttons
    const content = document.querySelector("#content");
    const buttons = document.querySelectorAll("button");

    function clearPage() {
        const page = document.querySelector(".page");
        if (page) content.removeChild(page);
    }

    // Disable the active button
    function updateActiveButton(index) {
        buttons.forEach((button, i) => {
            button.disabled = i === index; 
        });
    }

    function playContentAnimation() {
        content.classList.remove("load");
        setTimeout(function() {
            content.classList.add("load");
        }, 1);
    }

    function loadPage(index) {
        clearPage();
        updateActiveButton(index);
        // Load the corresponding page
        const loaders = [loadHome, loadMenu, loadContact, loadAbout];
        loaders[index]();
        playContentAnimation();
    }

    // Event listener for nav buttons (delegation)
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => loadPage(index));
    });

    //Event listener for document load
    document.addEventListener("DOMContentLoaded", function() {
        loadPage(0); // Load the Home page initially
    });
})();