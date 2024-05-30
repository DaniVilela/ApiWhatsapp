function enviarFormulario() {
  // Prevenir el comportamiento por defecto del formulario (recargar la página)
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("name").value;
  //const apellido = document.getElementById("lastname").value;
  const mensaje = document.getElementById("message").value;
  const number = document.getElementById("number").value;

  // Construir el mensaje de WhatsApp
  const texto = `Nombre: ${nombre}\nMensaje: ${mensaje}`;
  const numeroWhatsapp = parseInt(number);

  // Número de WhatsApp (con código de país, sin espacios ni símbolos)
  // Construir la URL de WhatsApp
  const url = `https://wa.me/${51}${numeroWhatsapp}?text=${encodeURIComponent(
    texto
  )}`;

  // Redirigir a la URL de WhatsApp
  window.open(url, "_blank");
}
