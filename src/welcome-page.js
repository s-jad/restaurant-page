import { pageHeader, pageFooter } from "./header-footer.js"

export default function PageLoad() {
    const welcome = document.createElement('div');

    welcome.id = "page-content";

    welcome.appendChild(welcomePageContent());
    return welcome;
}

export function welcomePageContent() {
    const welcomeContent = document.createElement('div');

    welcomeContent.id = "welcome-page";
    welcomeContent.classList.add('flex');

    welcomeContent.innerHTML = `
            <h1 id="welcome-title">El Foodies</h1>
            <p id="welcome-text">Spanish food, for foodies.</p>
        `;

    return welcomeContent;
}

