document.addEventListener('DOMContentLoaded', function() {
    const agregarIngredienteButton = document.getElementById('agregarIngrediente');
    const ordenesSeleccionadasList = document.getElementById('ordenesSeleccionadas');

    agregarIngredienteButton.addEventListener('click', function() {
        const nombreInput = document.getElementById('nombre');
        const stockInput = document.getElementById('stock');
        const precioInput = document.getElementById('precio');
        const descripcionInput = document.getElementById('descripcion');
        const categoriaSelect = document.getElementById('categoria');

        const nombre = nombreInput.value;
        const stock = stockInput.value;
        const precio = precioInput.value;
        const descripcion = descripcionInput.value;
        const categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;

        agregarAOrdenSeleccionada(nombre, stock, precio, descripcion, categoria);

        // Limpiar los campos después de agregar el ingrediente
        nombreInput.value = '';
        stockInput.value = '';
        precioInput.value = '';
        descripcionInput.value = '';
        categoriaSelect.selectedIndex = 0; // Esto selecciona la primera opción (siempre y cuando la primera opción sea un valor válido).
    });

    function agregarAOrdenSeleccionada(nombre, stock, precio, descripcion, categoria) {
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
                    <td>Stock:</td>
                    <td>${stock}</td>
                </tr>
                <tr>
                    <td>Precio:</td>
                    <td>${precio}</td>
                </tr>
                <tr>
                    <td>Descripción:</td>
                    <td>${descripcion}</td>
                </tr>
                <tr>
                    <td>Categoría:</td>
                    <td>${categoria}</td>
                </tr>
            </table>
            <i class="fas fa-trash-alt" style="cursor: pointer;"></i>
        `;
        ordenesSeleccionadasList.appendChild(listItem);
    
        // Agregar evento de clic para eliminar el elemento
        const trashIcon = listItem.querySelector('.fa-trash-alt');
        trashIcon.addEventListener('click', function() {
            ordenesSeleccionadasList.removeChild(listItem);
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
