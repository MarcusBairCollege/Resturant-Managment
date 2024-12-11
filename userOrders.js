document.addEventListener('DOMContentLoaded', function() {
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    const orderTotal = parseFloat(localStorage.getItem('orderTotal')) || 0; // Ensure it's parsed as a float

    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    orderItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('order-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add('order-item-image');
        listItem.appendChild(itemImage);

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('order-item-description');
        
        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        itemName.classList.add('order-item-name');
        itemDescription.appendChild(itemName);

        const itemPrice = document.createElement('span');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        itemPrice.classList.add('order-item-price');
        itemDescription.appendChild(itemPrice);

        listItem.appendChild(itemDescription);
        orderItemsContainer.appendChild(listItem);
    });

    orderTotalElement.textContent = `$${orderTotal.toFixed(2)}`;

    document.querySelector('.order-again').addEventListener('click', () => {
        window.location.href = 'Menu.html';
    });
});

function goBack() {
    window.location.href = 'Homepage.html';
}
