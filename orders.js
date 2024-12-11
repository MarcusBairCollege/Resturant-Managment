let managerOrders = JSON.parse(localStorage.getItem('managerOrders')) || [];

function displayManagerOrders() {
    const ordersList = document.querySelector('.orders-list');

    if (ordersList) {
        ordersList.innerHTML = '';

        managerOrders.forEach((order, index) => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <h3>Order ${index + 1} - ${order.date}</h3>
                <ul>
                    ${order.items.map(item => `
                        <li>${item.name} - $${item.price.toFixed(2)}</li>
                    `).join('')}
                </ul>
                <p><strong>Total: $${order.total.toFixed(2)}</strong></p>
                <button onclick="removeManagerOrder(${index})">Remove</button>
            `;
            ordersList.appendChild(orderItem);
        });
    } else {
        console.error('orders-list element not found');
    }
}

function removeManagerOrder(index) {
    managerOrders.splice(index, 1);
    localStorage.setItem('managerOrders', JSON.stringify(managerOrders));
    displayManagerOrders();
}

window.onload = () => {
    displayManagerOrders();
};

function redirectToManager(){
    window.location.href = 'manager-dashboard.html';
}