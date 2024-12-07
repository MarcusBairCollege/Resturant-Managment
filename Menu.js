function goBack() {
    window.location.href = 'Homepage.html'
}

function redirectToCheckout() {
    window.location.href = 'Checkout.html'
}

const menuData = JSON.parse(localStorage.getItem('menuData')) || {
    steak: { name: 'Galactic Grilled Steak', price: 29.99, image: 'Steak.jpg' },
    quinoaSalad: { name: 'Quantum Quinoa Salad', price: 21.99, image: 'quinoasalad.jpg' },
    salmon: { name: 'Starship Salmon', price: 26.99, image: 'salmon.jpg' },
    asparagusRisotto: { name: 'Astral Asparagus Risotto', price: 22.99, image: 'Asparagus-risotto.jpg' },
    noodleBowl: { name: 'Nova Noodle Bowl', price: 24.99, image: 'Spicy-Thai-Noodle-Bowls-square-1200.jpg' },
    stuffedChicken: { name: 'Stellar Stuffed Chicken', price: 28.99, image: 'stuffedchicken.jpg' },
    calamari: { name: 'Cosmic Calamari', price: 12.99, image: 'Garlic-sauteed-calamari.jpg' },
    nachos: { name: 'Nebula Nachos', price: 10.99, image: 'nachos.jpg' },
    avocadoToast: { name: 'Astro Avocado Toast', price: 9.99, image: 'avocado-toast.jpg' },
    garlicBread: { name: 'Galactic Garlic Bread', price: 8.99, image: 'garlic bread.jpg' },
    onionRings: { name: 'Orbit Onion Rings', price: 7.99, image: 'onion.avif' },
    shrimp: { name: 'Shooting Star Shrimp', price: 13.99, image: 'shrimp.jpg' },
    sundae: { name: 'Starlight Sundae', price: 8.99, image: 'sundae.jpg' },
    cheesecake: { name: 'Cosmic Cheesecake', price: 9.99, image: 'cheesecake.jpg' },
    gelato: { name: 'Galaxy Gelato', price: 7.99, image: 'gelato.jpg' },
    mousse: { name: 'Meteorite Mousse', price: 8.99, image: 'mousee.jpg' },
    parfait: { name: 'Planetary Parfait', price: 9.99, image: 'parfait.jpeg' },
    brownie: { name: 'Black Hole Brownie', price: 10.99, image: 'brownie.jpg' },
    martianMargarita: { name: 'Martian Margarita', price: 11.99, image: 'classic-margarita-1.jpg' },
    nebulaNegroni: { name: 'Nebula Negroni', price: 10.99, image: 'negroni.jpg' },
    plutoPunch: { name: 'Pluto Punch', price: 9.99, image: 'vodkapunch.jpg' },
    solarSangria: { name: 'Solar Sangria', price: 11.99, image: 'sangria.avif' },
    saturnSpritz: { name: 'Saturn Spritz', price: 10.99, image: 'spritz.jpg' },
    cometCooler: { name: 'Comet Cooler', price: 12.99, image: 'cooler.jpg' }
};

// Initialize the cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the orders from local storage
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Function to update the UI with the latest prices and names
function updatePrices() {
    for (const key in menuData) {
        const item = menuData[key];
        const priceElement = document.getElementById(`price-${key}`);
        const nameElement = document.getElementById(`name-${key}`);

        if (priceElement) {
            priceElement.innerText = `$${item.price.toFixed(2)}`;
        }

        if (nameElement) {
            nameElement.innerText = item.name;
        }
    }
}

// Function to add an item to the cart
function addToCart(id) {
    const item = menuData[id];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to render the cart
function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('cart-total').innerText = total.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to handle checkout and save the order
function checkout() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const order = {
        items: [...cart],
        total: total
    };
    
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Order placed successfully!');

    // Clear the cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to toggle cart visibility
function toggleCart() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    cartWrapper.classList.toggle('visible');
}

// Render the cart and update prices on page load
window.onload = () => {
    renderCart();
    updatePrices();
};
