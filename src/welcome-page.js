import { pageHeader, pageFooter } from "./header-footer.js"
import welcomeImg from "./assets/welcome-image.jpg"

export default function PageLoad() {
    const welcome = document.createElement('div');
    const imageFilter = document.createElement('div');

    const welcomeImage = new Image();
    welcomeImage.src = welcomeImg;
    welcomeImage.id = "welcome-image";
    welcome.id = "page-content";
    welcome.appendChild(welcomeImage);

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

