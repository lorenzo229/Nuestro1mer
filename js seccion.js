document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Redirigir al hacer submit en Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = "home.html"; // Redirección a home.html
        });
    }

    // Redirigir al hacer submit en Registro
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = "home.html"; // Redirección a home.html
        });
    }

    // Alternar entre formularios (opcional)
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');
    const container = document.querySelector('.container');

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => container.classList.add('active'));
        loginBtn.addEventListener('click', () => container.classList.remove('active'));
    }
});