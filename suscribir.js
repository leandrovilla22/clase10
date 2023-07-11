var nombre = ''
var email = ''
var contrasena = ''
var edad = 0
var tel = 0
var direccion = ''
var ciudad = ''
var cp = 0
var dni = 0

document.getElementById("nombre").addEventListener("blur", function() {
    var value = document.getElementById("nombre").value
    var error = document.getElementById("nombre-error")

    if(value.length > 6 && value.includes(" ")){
        nombre = value
        console.log(nombre)
        error.style.display = "none"
    }else{
        error.textContent = "Debe tener más de 6 letras y al menos un espacio entre medio.."
        error.style.display = "block"

        console.log("Debe tener más de 6 letras y al menos un espacio entre medio..")
    }
})

document.getElementById("email").addEventListener("blur", function() {
    var value = document.getElementById("email").value
    var error = document.getElementById("email-error");

    if (value.includes("@")) {
      email = value
      console.log(email)
      error.style.display = "none"
    } else {
      error.textContent = "debe tener un formato de email válido."
      error.style.display = "block"
      console.log("debe tener un formato de email válido.")
    }
})

document.getElementById("contrasena").addEventListener("blur", function() {
    var value = document.getElementById("contrasena").value
    var error = document.getElementById("contrasena-error");

    if(value.length > 8 && /^[a-zA-Z0-9]{8,}$/.test(value)){
        contrasena = value
        console.log(contrasena)
        error.style.display = "none";
    }else{
        error.textContent = "Al menos 8 caracteres, formados por letras y números."
        error.style.display = "block";
        console.log("Al menos 8 caracteres, formados por letras y números.")
    }
})

document.getElementById("edad").addEventListener("blur", function() {
    var value = document.getElementById("edad").value
    var error = document.getElementById("edad-error");

    if(value >= 18){
        edad = value
        console.log(edad)
        error.style.display = "none";
    }else{
        error.textContent = "Número entero mayor o igual a 18."
        error.style.display = "block";
        console.log("Número entero mayor o igual a 18.")
    }
})

document.getElementById("telefono").addEventListener("blur", function() {
    var value = document.getElementById("telefono").value
    var error = document.getElementById("telefono-error");

    if(value.length >= 7 && !value.includes(" ") && !value.includes("-")){
        tel = value
        console.log(telefono)
        error.style.display = "none";
    }else{
        error.textContent = "Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis."
        error.style.display = "block";
        console.log("Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.")
    }
})

document.getElementById("direccion").addEventListener("blur", function() {
    var value = document.getElementById("direccion").value
    var error = document.getElementById("direccion-error");

    if(value.length > 5 && /^[a-zA-Z0-9]+ [a-zA-Z0-9]+$/.test(value)){
        direccion = value
        console.log(direccion)
        error.style.display = "none";
    }else{
        error.textContent = "Al menos 5 caracteres, con letras, números y un espacio en el medio."
        error.style.display = "block";
        console.log("Al menos 5 caracteres, con letras, números y un espacio en el medio.")
    }
})

document.getElementById("ciudad").addEventListener("blur", function() {
    var value = document.getElementById("ciudad").value
    var error = document.getElementById("ciudad-error");

    if(value.length > 5 && /^[a-zA-Z0-9]+ [a-zA-Z0-9]+$/.test(value)){
        ciudad = value
        console.log(ciudad)
        error.style.display = "none";
    }else{
        error.textContent = "Al menos 3 caracteres."
        error.style.display = "block";
        console.log("Al menos 3 caracteres.")
    }
})

document.getElementById("cp").addEventListener("blur", function() {
    var value = document.getElementById("cp").value
    var error = document.getElementById("cp-error");

    if(value.length > 3){
        cp = value
        console.log(cp)
        error.style.display = "none";
    }else{
        error.textContent = "Al menos 3 caracteres."
        error.style.display = "block";
        console.log("Al menos 3 caracteres.")
    }
})

document.getElementById("dni").addEventListener("blur", function() {
    var value = document.getElementById("dni").value
    var error = document.getElementById("dni-error");

    if(value.length == 7 || value.length == 8){
        dni = value
        console.log(dni)
        error.style.display = "none";
    }else{
        error.textContent = "Número de 7 u 8 dígitos."
        error.style.display = "block";
        console.log("Número de 7 u 8 dígitos.")
    }
})

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(nombre, email, contrasena, edad, tel, direccion, ciudad, cp, dni);

    const modal = document.getElementById('modal-submit');
    const modalMessage = document.getElementById('modal-message');

    if (nombre !== '' && email !== '' && contrasena !== '' && edad > 0 && tel > 0 && direccion !== '' && ciudad !== '' && cp > 0 && dni > 0) {
        var mensaje = "Información del formulario:<br><br>";
        mensaje += "Nombre: " + nombre + "<br>";
        mensaje += "Email: " + email + "<br>";
        mensaje += "Contraseña: " + contrasena + "<br>";
        mensaje += "Edad: " + edad + "<br>";
        mensaje += "Telefono: " + tel + "<br>";
        mensaje += "Direccion: " + direccion + "<br>";
        mensaje += "Ciudad: " + ciudad + "<br>";
        mensaje += "Codigo Postal: " + cp + "<br>";
        mensaje += "DNI: " + dni + "<br>";

        console.log(mensaje);

        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
              }
              console.log(response);
              return response;
        })
        .then(data => {
            // Mostrar el mensaje de éxito o error en el modal
            console.log('Correcto:');
            modalMessage.innerHTML ='Suscripción exitosa<br><br>' + mensaje;
            modal.style.display = 'block'; // Mostrar el modal
        })
        .catch(error => {
            // Mostrar mensaje de error en el modal
            modalMessage.textContent = 'Ocurrió un error al procesar la solicitud' + error;
            modal.style.display = 'block'; // Mostrar el modal
        });
    }else{
        alert("Por favor, complete todos los campos correctamente antes de enviar el formulario.");
    }


    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});