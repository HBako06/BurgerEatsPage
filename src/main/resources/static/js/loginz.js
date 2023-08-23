function ingresar() {
    var usuario = document.getElementById("inputUsuario").value;
    var password = document.getElementById("inputPassword").value;

    var requestData = {
        username: usuario,
        password: password
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.loginSuccess) {
            console.log('Inicio de sesión exitoso');
            window.location.href = "reporte"; // Redirigir al área autorizada
        } else {
            alert('Inicio de sesión fallido. Por favor, verifica tus credenciales.');
        }
    })
    .catch(error => {
        console.error('Error al realizar el inicio de sesión:', error);
        // Realiza acciones en caso de error
    });
}
