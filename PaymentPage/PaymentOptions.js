
document.getElementById('paypal-btn').addEventListener('click', function() {
    hideAllPaymentFields();
   
});

document.getElementById('debit-card-btn').addEventListener('click', function() {
    hideAllPaymentFields();
    document.getElementById('card-details').style.display = 'block';
});

document.getElementById('bank-account-btn').addEventListener('click', function() {
    hideAllPaymentFields();
    document.getElementById('bank-details').style.display = 'block';
});

document.getElementById('gift-card-btn').addEventListener('click', function() {
    hideAllPaymentFields();
    document.getElementById('gift-card-details').style.display = 'block';
});


function hideAllPaymentFields() {
    document.getElementById('card-details').style.display = 'none';
    document.getElementById('bank-details').style.display = 'none';
    document.getElementById('gift-card-details').style.display = 'none';
}
