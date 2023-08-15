export default function MenuPage() {
    const menuPage = document.createElement('div');

    menuPage.id = "menu-page";
    menuPage.classList.add('flex');

    menuPage.innerHTML = `
        <h1 id="menu-title">Menu</h1>
        <div id="menu-content" class="grid">
            <div id="tapas-card" class="menu-card flex">
                <h3 class="menu-card-title">Tapas</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum minima dicta, perspiciatis doloribus in facilis minus ex voluptatem distinctio.</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="paela-card" class="menu-card flex">
                <h3 class="menu-card-title">Paela</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi unde nostrum animi molestiae modi itaque velit. In, architecto obcaecati?</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="ham-sandwich-card" class="menu-card flex">
                <h3 class="menu-card-title">Ham Sandwich</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reprehenderit tenetur quas maiores repellendus cum placeat exercitationem assumenda deserunt eius?</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="el-burger-card" class="menu-card flex">
                <h3 class="menu-card-title">EL Burger</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reprehenderit tenetur quas maiores repellendus cum placeat exercitationem assumenda deserunt eius?</p>
                <div class="order-buttons flex"></div>
            </div>
        </div>

        `;

    const cards = Array.from(menuPage.querySelectorAll('.menu-card'));

    cards.forEach(card => {
        card.addEventListener("click", handleCardEvents);
    });

    return menuPage;
}

function selectImage(card) {
    const image = document.createElement('img');

    if (card.id === "el-burger-card") {
        image.src = "assets/burger.jpg";
    } else if (card.id === "tapas-card") {
        image.src = "assets/tapas.jpg";
    } else if (card.id === "paela-card") {
        image.src = "assets/paela.jpg";
    } else if (card.id === "ham-sandwich-card") {
        image.src = "assets/sandwich.jpg";
    }

    image.style.width = "40vw";
    image.style.minWidth = "200px";
    image.style.maxWidth = "500px";
    image.style.height = "auto";
    image.style.backgroundRepeat = "no-repeat";
    return image;
}

function expandCard(card) {
    const menuPage = document.getElementById('menu-page');
    const menuContent = document.getElementById('menu-content');
    const menuTitle = document.getElementById('menu-title');

    menuContent.classList.add('disappear');
    menuTitle.classList.add('disappear');

    setTimeout(() => {
        card.classList.add('expanded');
        card.appendChild(selectImage(card));
        menuPage.appendChild(card);
    }, 500);
}

function shrinkCard(card) {
    const pageContent = document.getElementById('image-filter');
    const menuPage = document.getElementById('menu-page');

    card.classList.add('disappear');

    setTimeout(() => {
        pageContent.removeChild(menuPage);
        pageContent.appendChild(MenuPage());
    }, 500);
}

function handleCardEvents(ev) {
    const target = ev.target.closest('.menu-card');

    if (target.classList.contains('expanded')) {
        shrinkCard(target);
    } else {
        const pageContent = document.getElementById('page-content');
        const cards = Array.from(pageContent.querySelectorAll('.menu-card'));
        cards.forEach(card => {
            if (card.id !== target.id) {
                card.classList.add('disappear');
            }
        });
        setTimeout(() => {
            expandCard(target);
        }, 400);
    }
}
