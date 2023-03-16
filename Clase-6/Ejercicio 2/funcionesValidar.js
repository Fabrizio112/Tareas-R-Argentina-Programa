function validarElInput(a) {
    if (!/[1-9]/.test(a)) {
        return `Este campo solo puede tener numeros enteros`;
    }
    return "";
}

const $contenedorErrores = document.querySelector("#contenedor-errores");

function manejarError(arrayConLosValoresDeLasValidaciones) {
    let contadorErrores = 0;
    borrarMensajesDeError();
    for (let i = 0; i < arrayConLosValoresDeLasValidaciones.length; i++) {
        if (arrayConLosValoresDeLasValidaciones[i].length > 0) {
            document.querySelector(`[name="input-salario${i + 1}"]`).classList.add("border", "border-danger", "border-3");
            contadorErrores++;
            let elementoLiDelError = document.createElement("li");
            elementoLiDelError.textContent = arrayConLosValoresDeLasValidaciones[i];
            elementoLiDelError.classList.add("mensajes-de-error", "fs-4");
            $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded")
            $contenedorErrores.appendChild(elementoLiDelError);
            aparecerContenedorErrores();
        } else {
            document.querySelector(`[name="input-salario${i + 1}"]`).classList.remove("border", "border-danger", "border-3");
            ocultarContenedorErrores();
        }
    }
    return contadorErrores;
}

function borrarMensajesDeError() {
    document.querySelectorAll(".mensajes-de-error").forEach(function (a) {
        a.remove();
    })
}

function aparecerContenedorErrores() {
    $contenedorErrores.classList.remove("d-none");
};
function ocultarContenedorErrores() {
    $contenedorErrores.classList.add("d-none");
};