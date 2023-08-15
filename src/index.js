import "./style.css";
import PageLoad, { welcomePageContent } from "./welcome-page.js";
import MenuPage from "./menu-page.js";
import ContactPage from "./contact-page";
import { pageHeader, pageFooter } from "./header-footer.js";

document.body.appendChild(pageHeader());
document.body.appendChild(PageLoad());
document.body.appendChild(pageFooter());

const content = document.getElementById('image-filter');
const tabs = Array.from(document.querySelectorAll('.tab'));

// TAB EVENT LISTENERS 

tabs.forEach(tab => {
    tab.addEventListener('click', handleTab);
});

function handleTab(ev) {
    const toRemove = content.querySelectorAll('[id$="-page"]')[0];

    if (ev.target.id === "welcome-tab") {
        const toAdd = welcomePageContent();
        toRemove.classList.add("hide-top");
        toAdd.classList.add("hide-bottom");
        content.appendChild(toAdd);

        setTimeout(() => {
            toAdd.classList.remove("hide-bottom");
            content.removeChild(toRemove);
        }, 310);
    } else if (ev.target.id === "menu-tab") {
        const toAdd = MenuPage();

        toRemove.classList.add("hide-top");
        toAdd.classList.add("hide-bottom");
        content.appendChild(toAdd);

        setTimeout(() => {
            toAdd.classList.remove("hide-bottom");
            content.removeChild(toRemove);
        }, 310);
    } else if (ev.target.id === "contact-tab") {
        const toAdd = ContactPage();

        toRemove.classList.add("hide-top");
        toAdd.classList.add("hide-bottom");
        content.appendChild(toAdd);

        setTimeout(() => {
            toAdd.classList.remove("hide-bottom");
            content.removeChild(toRemove);
        }, 310);
    }
};
