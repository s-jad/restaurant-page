export default function WelcomePage() {
    const welcome = document.createElement('div');

    welcome.id = "welcome-content";

    welcome.appendChild(pageHeader());
    welcome.appendChild(welcomePageContent());
    welcome.appendChild(pageFooter());
    return welcome;
}

function pageHeader() {
    const welcomeHeader = document.createElement('header');

    welcomeHeader.id = "restaurant-header";

    welcomeHeader.innerHTML = `
            <div id="top-header-flex" class="flex">
                <img src="" alt="" id="logo">
                <ul id="list-flex" class="flex">
                    <li class="icon"><a href="#"></a></li>
                    <li class="icon"><a href="#"></a></li>
                    <li class="icon"><a href="#"></a></li>
                </ul>
            </div>

            <div id="bottom-header-flex" class="flex">
                <input id="recipe-search" name="recipe-search" type="search">
                <label for="colorscheme-switch">Colorscheme</label>
                <input id="dark-scheme" name="colorscheme-switch" type="radio">
                <input id="light-scheme" name="colorscheme-switch" type="radio">
            </div>
        `;

    return welcomeHeader;
}

function welcomePageContent() {
    const welcomeContent = document.createElement('div');

    welcomeContent.id = "welcome-page-content";

    welcomeContent.innerHTML = `
            <h1 id="welcome-title">El Foodies</h1>
            <p id="welcome-text">Spanish food, for foodies.</p>
        `;

    return welcomeContent;
}

function pageFooter() {
    const footer = document.createElement('footer');

    footer.id = "page-footer";

    footer.innerHTML = `
            <div id="copywrite">Copywrite - A Chef</div>
            <ul id="footer-links-flex" class="flex">
                <li class="icon"><a href="#"></a></li>
                <li class="icon"><a href="#"></a></li>
                <li class="icon"><a href="#"></a></li>
            </ul>
    `;

    return footer;
}

