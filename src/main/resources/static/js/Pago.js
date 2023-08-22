document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Obtén los valores de los campos
    var cardNumber = document.getElementById("card-number").value;
    var cardName = document.getElementById("card-name").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;
    
    // Realiza el procesamiento del pago aquí
    // ...
  
    // Muestra una alerta de éxito
    alert("Pago realizado con éxito");
    window.location.href = "Menu";
    
    // Restablece los campos del formulario
    document.getElementById("payment-form").reset();
  });
  