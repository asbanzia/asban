
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function navigateToHome() {
    var email = document.getElementById("email").value;
  }

function navigateToHome() {
    window.location.href = "Home.html";
}