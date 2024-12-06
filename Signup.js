document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        alert('Sign-up successful! Redirecting to login page...');
        window.location.href = 'login.html';
    } else {
        alert('Passwords do not match. Please try again.');
    }
});

function redirectToLogin() { 
    window.location.href = 'login.html'; 
}
