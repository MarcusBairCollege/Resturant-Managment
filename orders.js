function redirectToManager() {
    window.location.href = 'manager-dashboard.html'
}

let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Function to display orders on the page
function displayOrders() {
    const ordersList = document.querySelector('.orders-list');

    // Ensure the element exists
    if (ordersList) {
        ordersList.innerHTML = '';

        orders.forEach((order, index) => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <h3>Order ${index + 1}</h3>
                <ul>
                    ${order.items.map(item => `
                        <li>${item.name} - $${item.price.toFixed(2)}</li>
                    `).join('')}
                </ul>
                <p><strong>Total: $${order.total.toFixed(2)}</strong></p>
                <button onclick="removeOrder(${index})">Remove</button>
            `;
            ordersList.appendChild(orderItem);
        });
    } else {
        console.error('orders-list element not found');
    }
}

// Function to remove an order
function removeOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders();
}

// Render the orders on page load
window.onload = () => {
    displayOrders();
};
