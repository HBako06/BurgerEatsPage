// Evento al cargar la página
window.onload = function() {
    // Obtener elementos del DOM
    var eventList = document.getElementById("event-list");
    var addEventButton = document.getElementById("add-event");
    
    // Agregar evento al hacer clic en el botón de agregar
    addEventButton.onclick = function() {
      // Obtener valores de la fecha y el nombre del evento
      var eventDate = document.getElementById("event-date").value;
      var eventName = document.getElementById("event-name").value;
      
      // Validar que se haya ingresado una fecha y un nombre de evento
      if (eventDate !== "" && eventName !== "") {
        // Crear un nuevo elemento de lista con la fecha y el nombre del evento
        var li = document.createElement("li");
        
        // Crear elementos para la fecha, nombre y botón de eliminar
        var dateElement = document.createElement("span");
        dateElement.innerHTML = eventDate;
        var nameElement = document.createElement("span");
        nameElement.classList.add("event-name");
        nameElement.innerHTML = eventName;
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Eliminar";
        
        // Agregar evento al hacer clic en el botón de eliminar
        deleteButton.onclick = function() {
          eventList.removeChild(li);
        };
        
        // Agregar elementos al elemento de lista
        li.appendChild(dateElement);
        li.appendChild(nameElement);
        li.appendChild(deleteButton);
        
        // Agregar el nuevo elemento de lista a la lista de eventos
        eventList.appendChild(li);
        
        // Restablecer los valores de los campos de entrada
        document.getElementById("event-date").value = "";
        document.getElementById("event-name").value = "";
      }
    };
  };
  