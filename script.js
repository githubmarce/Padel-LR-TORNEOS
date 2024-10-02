var usuarioregistrado = "user";
var contraseñaregistrada = "123";

// Verificar si el usuario ya ha iniciado sesión
if (localStorage.getItem("loggedIn") === "true") {
    // Redirigir a la página principal si el usuario ya está logueado
    if (window.location.pathname.includes("login.html")) {
        window.location.href = "index.html"; // Redirigir a la página principal
    } else {
        // Mostrar la página principal si ya está en index.html
        document.getElementById("mainContent").style.display = "block";
        
    }
} else {
    // Si no ha iniciado sesión y está en la página principal, redirigir al login
    if (!window.location.pathname.includes("login.html")) {
        window.location.href = "login.html";
    }
}
// Formulario de login (en login.html)
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar recargar la página al enviar el formulario

        var usuarioingresado = document.getElementById("username").value;
        var contraseñaingresada = document.getElementById("password").value;

        if (usuarioingresado === usuarioregistrado && contraseñaingresada === contraseñaregistrada) {
            // Guardar el estado de inicio de sesión
            localStorage.setItem("loggedIn", "true");

            // Redirigir a la página principal
            window.location.href = "index.html";
        } else {
            // Mostrar un mensaje de error si las credenciales no son correctas
            var messageElement = document.getElementById("message");
            messageElement.style.display = "block";
            messageElement.innerText = "Usuario o contraseña incorrectos";
        }
    });
}

// botón de cerrar sesión (en index.html)
if (document.getElementById("logoutButton")) {
    document.getElementById("logoutButton").addEventListener("click", function() {
        localStorage.removeItem("loggedIn"); // Elimina el estado de inicio de sesión
        window.location.href = "login.html"; // Redirigir al login
    });
}
