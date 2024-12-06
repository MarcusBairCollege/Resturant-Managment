// Ensure menuData is defined
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
    mousse: { name: 'Meteorite Mousse', price: 8.99, image: 'mousse.jpg' },
    parfait: { name: 'Planetary Parfait', price: 9.99, image: 'parfait.jpeg' },
    brownie: { name: 'Black Hole Brownie', price: 10.99, image: 'brownie.jpg' },
    martianMargarita: { name: 'Martian Margarita', price: 11.99, image: 'classic-margarita-1.jpg' },
    nebulaNegroni: { name: 'Nebula Negroni', price: 10.99, image: 'negroni.jpg' },
    plutoPunch: { name: 'Pluto Punch', price: 9.99, image: 'vodkapunch.jpg' },
    solarSangria: { name: 'Solar Sangria', price: 11.99, image: 'sangria.avif' },
    saturnSpritz: { name: 'Saturn Spritz', price: 10.99, image: 'spritz.jpg' },
    cometCooler: { name: 'Comet Cooler', price: 12.99, image: 'cooler.jpg' }
};

document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedItem = document.getElementById('item-select').value;
    const newName = document.getElementById('new-name').value;
    const newPrice = parseFloat(document.getElementById('new-price').value);

    // Debugging log
    console.log("Updating item:", selectedItem, newName, newPrice);

    // Update menu data
    menuData[selectedItem].name = newName;
    menuData[selectedItem].price = newPrice;

    // Save updated data to local storage
    localStorage.setItem('menuData', JSON.stringify(menuData));

    // Debugging log
    console.log("Updated menu data saved to local storage:", localStorage.getItem('menuData'));

    alert('Menu item updated successfully!');
});
