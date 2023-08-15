import { pageHeader, pageFooter } from "./header-footer.js"

export default function PageLoad() {
    const welcome = document.createElement('div');
    const imageFilter = document.createElement('div');

    welcome.id = "page-content";
    welcome.style.backgroundImage = "url(./assets/welcome-image.jpg)";
    welcome.style.backgroundSize = "cover";
    welcome.style.backgroundRepeat = "no-repeat";

    imageFilter.id = "image-filter";
    welcome.appendChild(imageFilter);
    imageFilter.appendChild(welcomePageContent());
    return welcome;
}

export function welcomePageContent() {
    const welcomeContent = document.createElement('div');

    welcomeContent.id = "welcome-page";

    welcomeContent.classList.add('flex');
    welcomeContent.innerHTML = `
        <div id="welcome-text-container">
            <h1 id="welcome-title">El Foodies</h1>
            <p id="welcome-text">Spanish food, for foodies.</p>
        </div>
        `;

    return welcomeContent;
}

