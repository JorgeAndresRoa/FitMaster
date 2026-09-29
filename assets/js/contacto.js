// 1. Seleccionamos el formulario por su ID
const formulario = document.getElementById('formularioContacto');

// 2. Escuchamos el evento 'submit'
formulario.addEventListener('submit', function (event) {
    // 3. Evitamos que la página se recargue automáticamente
    event.preventDefault();

    // 4. Obtenemos los elementos del DOM (guardamos el elemento completo, no solo el .value)
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');
    const inputAsunto = document.getElementById('opciones');
    const inputTelefono = document.getElementById('telefono');
    const inputMensaje = document.getElementById('mensaje');

    // 5. Creamos el texto de la simulación usando sus valores actuales
    const textoAlerta = `📧 ¡Simulación de envío exitosa!\n\n` +
        `De: ${inputNombre.value} (${inputCorreo.value})\n` +
        `Para: sistema@simulado.com\n\n` +
        `Asunto: ${inputAsunto.value}\n\n` +
        `Mensaje recibido:\n"${inputMensaje.value}"`;

    // 6. Mostramos la alerta en pantalla (el código se pausa aquí)
    alert(textoAlerta);

    // 7. LIMPIEZA MANUAL: Vaciamos los campos uno por uno al cerrar la alerta
    inputNombre.value = "";
    inputCorreo.value = "";
    inputMensaje.value = "";
    inputTelefono.value = "";

    
    // Si 'opciones' es un select, esto lo regresa a la primera opción por defecto
    inputAsunto.selectedIndex = 0; 
});
