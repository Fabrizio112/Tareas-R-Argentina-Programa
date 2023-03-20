let $contenedorErrores = document.querySelector("#contenedor-errores")

function validarElInput(a) {
    if (!/[1-9]/.test(a)) {
        return `Este campo solo puede tener numeros enteros`;
    }
    return "";
}

function manejarError(a) {
    borrarMensajesDeError();
    let contadorError = 0;
    if (validarElInput(a)) {
        contadorError++;
        document.querySelector("#salario-user").classList.add("border", "border-danger", "border-3");
        let elementoLiDelError = document.createElement("li");
        elementoLiDelError.textContent = validarElInput(a);
        elementoLiDelError.classList.add("mensaje-de-error", "fs-4");
        $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded")
        $contenedorErrores.appendChild(elementoLiDelError);
        mostarContenedorDeErrores();
    } else {
        document.querySelector("#salario-user").classList.remove("border", "border-danger", "border-3");
        ocultarContenedorDeErrores()
    }
    return contadorError;
}

function mostarContenedorDeErrores() {
    document.querySelector("#contenedor-errores").classList.remove("d-none")
}

function ocultarContenedorDeErrores() {
    document.querySelector("#contenedor-errores").classList.add("d-none")
}
function borrarMensajesDeError() {
    document.querySelectorAll(".mensaje-de-error").forEach(input => {
        input.remove();
    })
}