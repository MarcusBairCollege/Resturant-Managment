function goBack(){
    window.location.href='Menu.html'
}

document.addEventListener('DOMContentLoaded', function() {
    const paymentButtons = document.querySelectorAll('.payment-btn');
    const totalPriceElement = document.querySelector('.total-price p');
    const submitButton = document.querySelector('.submit-btn');

    // Function to update the total price from local storage
    function updateTotalPrice() {
        const orderTotal = JSON.parse(localStorage.getItem('orderTotal')) || 0;
        totalPriceElement.textContent = `$${orderTotal.toFixed(2)}`;
    }

    // Function to handle payment section visibility
    function showPaymentSection(sectionId) {
        const sections = document.querySelectorAll('.payment-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }

    updateTotalPrice();

    paymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const method = button.getAttribute('data-method');
            showPaymentSection(method);
        });
    });

    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            completePayment();
        });
    }
});

function completePayment() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderTotal = cart.reduce((total, item) => total + item.price, 0);

    localStorage.setItem('orderTotal', orderTotal.toFixed(2));

    const newOrder = {
        items: cart,
        total: orderTotal,
        date: new Date().toLocaleString()
    };

    const userOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
    userOrders.push(newOrder);
    localStorage.setItem('userOrders', JSON.stringify(userOrders));

    const managerOrders = JSON.parse(localStorage.getItem('managerOrders')) || [];
    managerOrders.push(newOrder);
    localStorage.setItem('managerOrders', JSON.stringify(managerOrders));

    alert('Thank you for your purchase!');
    localStorage.setItem('cart', JSON.stringify([]));
}
