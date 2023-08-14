export default function ContactPage() {
    const contact = document.createElement('div');

    contact.id = "contact-page";
    contact.classList.add('flex');

    contact.innerHTML = `
        <div id="contact-card" class="flex">
            <h2>Contact Us</h2>
            <h3>Phone:</h3>
            <p id="restaurant-contact-phone">000-0000-0000</p><br>
            <h3>Email:</h3>
            <p id="restaurant-contact-email">this@restaurant.com</p><br>
            <h3>Address:</h3>
            <p id="restaurant-contact-address">12 Astreet<br> SomePartOfTown<br> Big
            City<br> 115-4432<br> Earth</p>
        </div>
    `;

    return contact;
}
