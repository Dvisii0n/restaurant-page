import "./styles.css"
import home from "./components/home.js";
import menu from "./components/menu.js";

const content = document.querySelector("#content");

function renderPage(page) {
    content.innerHTML = "";
    content.appendChild(page);

}


renderPage(home());

const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => btn.addEventListener("click", (event) => {
    switch (event.target.className) {
        case "nav-btn home-btn":
            renderPage(home());
            break;
        case "nav-btn menu-btn":
            renderPage(menu());
            break;
    }
}));

