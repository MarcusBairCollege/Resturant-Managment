document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'userpassword') {
        alert('Login successful! Redirecting to user dashboard...');
        
        window.location.href = 'user-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('manager-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('manager-username').value;
    const password = document.getElementById('manager-password').value;
    
    if (username === 'manager' && password === 'managerpassword') {
        alert('Login successful! Redirecting to manager dashboard...');
        
        window.location.href = 'manager-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
