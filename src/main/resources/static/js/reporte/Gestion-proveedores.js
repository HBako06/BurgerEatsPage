document.addEventListener('DOMContentLoaded', function() {
    const agregarProveedorButton = document.getElementById('agregarProveedor');
    const proveedoresRegistradosList = document.getElementById('proveedoresRegistrados');

    agregarProveedorButton.addEventListener('click', function() {
        const nombreInput = document.getElementById('nombre');
        const razonSocialInput = document.getElementById('razonSocial');
        const rucInput = document.getElementById('ruc');
        const telefonoInput = document.getElementById('telefono');
        const direccionInput = document.getElementById('direccion');
        const sitioWebInput = document.getElementById('sitioWeb');

        const nombre = nombreInput.value;
        const razonSocial = razonSocialInput.value;
        const ruc = rucInput.value;
        const telefono = telefonoInput.value;
        const direccion = direccionInput.value;
        const sitioWeb = sitioWebInput.value;

        agregarAProveedoresRegistrados(nombre, razonSocial, ruc, telefono, direccion, sitioWeb);

        // Limpiar los campos después de agregar el proveedor
        nombreInput.value = '';
        razonSocialInput.value = '';
        rucInput.value = '';
        telefonoInput.value = '';
        direccionInput.value = '';
        sitioWebInput.value = '';
    });

    function agregarAProveedoresRegistrados(nombre, razonSocial, ruc, telefono, direccion, sitioWeb) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item mb-2'; // Agregar clases de Bootstrap
        
        // Crear una tabla para organizar los datos
        listItem.innerHTML = `
            <table>
                <tr>
                    <td>Nombre:</td>
                    <td>${nombre}</td>
                </tr>
                <tr>
                    <td>Razón Social:</td>
                    <td>${razonSocial}</td>
                </tr>
                <tr>
                    <td>RUC:</td>
                    <td>${ruc}</td>
                </tr>
                <tr>
                    <td>Teléfono:</td>
                    <td>${telefono}</td>
                </tr>
                <tr>
                    <td>Dirección:</td>
                    <td>${direccion}</td>
                </tr>
                <tr>
                    <td>Sitio Web:</td>
                    <td>${sitioWeb}</td>
                </tr>
            </table>
            <i class="fas fa-trash-alt" style="cursor: pointer;"></i>
        `;
        proveedoresRegistradosList.appendChild(listItem);
    
        // Agregar evento de clic para eliminar el elemento
        const trashIcon = listItem.querySelector('.fa-trash-alt');
        trashIcon.addEventListener('click', function() {
            proveedoresRegistradosList.removeChild(listItem);
        });
    }

    const fechaHoraElement = document.getElementById('fechaHora');

    function actualizarFechaHora() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const fechaHoraString = now.toLocaleDateString('es-PE', options); // Cambia 'es-PE' por el código de idioma de tu elección
        fechaHoraElement.textContent = fechaHoraString;
    }

    // Actualizar la fecha y hora cada segundo
    setInterval(actualizarFechaHora, 1000);

    // Actualizar la fecha y hora al cargar la página
    actualizarFechaHora();
});
