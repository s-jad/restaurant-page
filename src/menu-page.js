export default function MenuPage() {
    const menuContent = document.createElement('div');

    menuContent.id = "menu-page";
    menuContent.classList.add('flex');

    menuContent.innerHTML = `
        <h1>Menu</h1>
        <div id="menu-content" class="grid">
            <div id="chicken-parmesan-card" class="menu-card flex">
                <h3 class="menu-title">Chicken Parmesan</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum minima dicta, perspiciatis doloribus in facilis minus ex voluptatem distinctio.</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="roast-beef-card" class="menu-card flex">
                <h3 class="menu-title">Roast Beef</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi unde nostrum animi molestiae modi itaque velit. In, architecto obcaecati?</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="ham-sandwich-card" class="menu-card flex">
                <h3 class="menu-title">Ham Sandwich</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reprehenderit tenetur quas maiores repellendus cum placeat exercitationem assumenda deserunt eius?</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="el-burger-card" class="menu-card flex">
                <h3 class="menu-title">EL Burger</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reprehenderit tenetur quas maiores repellendus cum placeat exercitationem assumenda deserunt eius?</p>
                <div class="order-buttons flex"></div>
            </div>
        </div>

        `;

    const cards = Array.from(menuContent.querySelectorAll('.menu-card'));

    cards.forEach(card => {
        card.addEventListener("click", handleCardEvents);
    });

    return menuContent;
}

function expandCard(card) {
    const menuPage = document.getElementById('menu-page');
    console.log(menuPage);
    const menuContent = document.getElementById('menu-content');
    card.classList.add('expanded');
    menuPage.removeChild(menuContent);
    menuPage.appendChild(card);

}

function shrinkCard(card) {
    const pageContent = document.getElementById('page-content');
    const menuPage = document.getElementById('menu-page');

    card.classList.remove('expanded');
    card.classList.add('disappear');

    setTimeout(() => {
        pageContent.removeChild(menuPage);
        pageContent.appendChild(MenuPage());
        console.log(MenuPage());
    }, 300);
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
