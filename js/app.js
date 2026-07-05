document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('registroForm');
    const modal = document.getElementById('miModal');
    const span = document.getElementsByClassName('close')[0];

    // Formatear tarjeta mientras el usuario escribe (evento input)
    document.getElementById('tarjeta').addEventListener('input', function(e) {
        e.target.value = formatearTarjeta(e.target.value);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let esValido = true;

        // Validar Nombre
        const nombre = document.getElementById('nombre').value;
        if(!soloLetras(nombre)) {
            document.getElementById('errorNombre').innerText = "Solo se permiten letras.";
            esValido = false;
        } else { document.getElementById('errorNombre').innerText = ""; }

        // Validar Edad
        const fechaNac = document.getElementById('fechaNac').value;
        if(!esMayorDeEdad(fechaNac)) {
            document.getElementById('errorFecha').innerText = "Debes ser mayor de edad para proceder.";
            esValido = false;
        } else { document.getElementById('errorFecha').innerText = ""; }

        // Validar Longitud CVV
        const cvv = document.getElementById('cvv').value;
        if(!validarLongitud(cvv, 4)) {
            document.getElementById('errorCvv').innerText = "El CVV no puede tener más de 4 dígitos.";
            esValido = false;
        } else { document.getElementById('errorCvv').innerText = ""; }

        // Validar Tarjeta 
        const tarjeta = document.getElementById('tarjeta').value;
        if(!validarTarjetaLuhn(tarjeta)) {
            document.getElementById('errorTarjeta').innerText = "El número de tarjeta no es válido (Fallo Algoritmo de Luhn).";
            esValido = false;
        } else { document.getElementById('errorTarjeta').innerText = ""; }

        // Si todo es válido, calculamos la edad y mostramos el modal
        if(esValido) {
            const edad = calcularEdad(fechaNac);
            document.getElementById('mensajeModal').innerText = `Hola ${nombre} (${edad} años). Tu tarjeta ha sido validada por el algoritmo de Luhn exitosamente.`;
            modal.style.display = "block";
        }
    });

    span.onclick = function() { modal.style.display = "none"; }
    
    window.onclick = function(event) {
        if (event.target == modal) { modal.style.display = "none"; }
    }

});