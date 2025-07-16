import "./styles.css"
import { home } from "./components/home.js";

console.log("server running...")

const content = document.querySelector("#content");

function renderPage(page) {
    content.innerHTML = "";
    content.appendChild(page);
    
}

renderPage(home());