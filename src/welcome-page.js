export default function PageLoad() {
    const welcome = document.createElement('div');
    const imageFilter = document.createElement('div');
    welcome.id = "page-content";

    const welcomeImage = new Image();
    welcomeImage.src = "./assets/welcome-image.jpg";
    welcomeImage.id = "welcome-image";
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

