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
