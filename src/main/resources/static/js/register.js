document.addEventListener("DOMContentLoaded", function() {
    const modalRegistro = document.getElementById("modalRegistro");
    const registroForm = document.getElementById("registroForm");

    // Agrega un evento al botón de registro
    registroForm.addEventListener("click", function() {
        // Obtén los datos del formulario
        const userData = {
            nombres: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellido").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            contrasena: document.getElementById("contrasena").value
        };

        // Envía la solicitud POST al servidor
        fetch("/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            const modalMessage = document.getElementById("modalMessage");
            if (data.success) {
                modalMessage.textContent = "Registro exitoso";
            } else if (data.error === "duplicated") {
                modalMessage.textContent = "Correo ya en uso";
            } else {
                modalMessage.textContent = "Error al registrar";
            }
            modalRegistro.style.display = "block";
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
