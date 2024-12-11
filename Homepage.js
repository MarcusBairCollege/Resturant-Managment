document.addEventListener('DOMContentLoaded', () => {

});

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var body = document.body;

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        body.classList.remove("sidebar-open");
    } else {
        sidebar.style.left = "0";
        body.classList.add("sidebar-open");
    }
}

(function(){
    emailjs.init("7PDlMz9G4fdZQwT4R");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_rpk0fve', 'template_b3k6sb8', this)
        .then(function() {
            document.getElementById('status').innerText = 'Message sent successfully!';
        }, function(error) {
            document.getElementById('status').innerText = 'Failed to send message: ' + JSON.stringify(error);
        });
});


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

function redirectToMap() { 
    window.location.href = 'Maps.html'; 
}

function redirectToMenuPage(){
    window.location.href = 'Menu.html'
}

function redirectToSignUpPage(){
    window.location.href = 'Signup.html'
}
