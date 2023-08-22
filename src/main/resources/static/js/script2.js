let toggle = document.getElementById("toggle");
let label = document.getElementById("label");
toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle("oscuro");
  if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    label.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtener elementos del DOM
  const datosButton = document.getElementById("v-pills-home-tab");
  const contraseñaButton = document.getElementById("v-pills-profile-tab");
  const datosPane = document.getElementById("v-pills-home");
  const contraseñaPane = document.getElementById("v-pills-profile");

  // Agregar eventos de clic para cambiar de pestaña
  datosButton.addEventListener("click", function() {
    // Mostrar pestaña de Datos
    datosPane.classList.add("show", "active");
    contraseñaPane.classList.remove("show", "active");
  });

  contraseñaButton.addEventListener("click", function() {
    // Mostrar pestaña de Contraseña
    contraseñaPane.classList.add("show", "active");
    datosPane.classList.remove("show", "active");
  });
});
