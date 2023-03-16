function validarEInputTexto(a) {
    if (!/[a-zA-Z]\ */.test(a)) {
        return `Este campo solo puede tener Letras`;
    }
    if (a.length == "") {
        return `Este campo no puede estar vacio`
    }
    return "";
}
function validarElInputNumero(a) {
    if (!/[1-9]/.test(a)) {
        return `Este campo solo puede tener numeros enteros`;
    }
    if (a.length == "") {
        return `Este campo no puede estar vacio`
    }
    return "";
}

let $contenedorErrores = document.querySelector("#contenedor-errores");
let $form = document.querySelector("form")
function manejarErrores(errores) {
    borrarMensajesDeError();
    let keys = Object.keys(errores);
    let contadorErrores = 0
    keys.forEach(value => {
        const error = errores[value]
        if (error) {
            contadorErrores++;
            $form[value].classList.add("border", "border-warning", "border-3");
            let elementoLiDelError = document.createElement("li");
            elementoLiDelError.textContent = error;
            elementoLiDelError.classList.add("mensaje-de-error", "fs-4");
            $contenedorErrores.classList.add("bg-warning", "text-center", "text-light", "p-3", "my-4", "border", "rounded")
            $contenedorErrores.appendChild(elementoLiDelError);
            mostarContenedorDeErrores();
        } else {
            $form[value].classList.remove("border", "border-warning", "border-3");
        }
    })
    return contadorErrores;
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