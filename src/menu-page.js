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
    const image = new Image();

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
    image.style.maxWidth = "450px";
    image.style.height = "auto";

    return image;
}

function getInfo(card) {
    const price = document.createElement('p');
    const allergens = document.createElement('p');

    if (card.id === "el-burger-card") {
        price.innerText = "14€";
        allergens.innerText = "Milk products, Gluten";
    } else if (card.id === "tapas-card") {
        price.innerText = "3€ per dish";
        allergens.innerText = "Shellfish, fish";
    } else if (card.id === "paela-card") {
        price.innerText = "12€";
        allergens.innerText = "Shellfish, fish";
    } else if (card.id === "ham-sandwich-card") {
        price.innerText = "8€";
        allergens.innerText = "Pork, Gluten";
    }

    return { price, allergens };
}

function expandCard(card) {
    const menuPage = document.getElementById('menu-page');
    const menuContent = document.getElementById('menu-content');
    const menuTitle = document.getElementById('menu-title');

    menuContent.classList.add('disappear');
    menuTitle.classList.add('disappear');

    const info = document.createElement('div');
    info.classList.add('flex');
    info.id = "meal-info";
    info.style.flexDirection = "column";
    info.style.gridColumn = "1 / 3";

    const priceTitle = document.createElement('h3');
    priceTitle.innerText = "Price:";
    const allergensTitle = document.createElement('h3');
    allergensTitle.innerText = "Allergens:";
    const { price, allergens } = getInfo(card);

    info.appendChild(priceTitle);
    info.appendChild(price);
    info.appendChild(allergensTitle);
    info.appendChild(allergens);

    setTimeout(() => {
        card.classList.add('expanded');
        card.appendChild(info);
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
