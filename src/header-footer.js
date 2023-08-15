export function pageHeader() {
    const welcomeHeader = document.createElement('header');

    welcomeHeader.id = "page-header";
    welcomeHeader.classList.add('fixed');
    welcomeHeader.classList.add('zi-10');

    welcomeHeader.innerHTML = `
            <div id="header-flex" class="flex">
                <div id="tab-flex" class="flex">
                    <div id="welcome-tab" class="tab">Welcome</div>
                    <div id="menu-tab" class="tab">Menu</div>
                    <div id="contact-tab" class="tab">Contact</div>
                </div>

                <div id="icon-flex" class="flex">
                    <img class="social-media-icon" id="facebook-icon" src="./assets/facebook.svg">
                    <img class="social-media-icon" id="twitter-icon" src="./assets/twitter.svg">
                    <img class="social-media-icon" id="whatsapp-icon" src="./assets/whatsapp.svg">
                </img>
            </img>
        `;

    return welcomeHeader;
}

export function pageFooter() {
    const footer = document.createElement('footer');

    footer.id = "page-footer";
    footer.classList.add('fixed');
    footer.classList.add('flex');

    footer.innerHTML = `
            <div id="copyright">Copyright - A Chef</div>
            <ul id="footer-links-flex" class="flex">
                <li class="icon"><a href="#"></a></li>
                <li class="icon"><a href="#"></a></li>
                <li class="icon"><a href="#"></a></li>
            </ul>
    `;

    return footer;
}

