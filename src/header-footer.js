export function pageHeader() {
    const welcomeHeader = document.createElement('header');

    welcomeHeader.id = "page-header";
    welcomeHeader.classList.add('fixed');
    welcomeHeader.classList.add('zi-10');

    welcomeHeader.innerHTML = `
            <div id="header-tab-flex" class="flex">
                <div id="tab-flex" class="flex">
                    <div id="welcome-tab" class="tab">Welcome</div>
                    <div id="menu-tab" class="tab">Menu</div>
                    <div id="contact-tab" class="tab">Contact</div>
                </div>

                <div id="colorscheme-flex" class="flex">
                    <label for="colorscheme-switch">Colorscheme</label>
                    <div id="colorscheme-switch-flex" class="flex">
                        <input id="dark-scheme" name="colorscheme-switch" type="radio">
                        <input id="light-scheme" name="colorscheme-switch" type="radio">
                    </div>
            </div>
        `;

    return welcomeHeader;
}

export function pageFooter() {
    const footer = document.createElement('footer');

    footer.id = "page-footer";
    footer.classList.add('fixed');

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

