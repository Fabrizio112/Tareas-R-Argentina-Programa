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
            document.querySelector(`[name="input-salario${i + 1}"]`).className = "error";
            contadorErrores++;
            let elementoLiDelError = document.createElement("li");
            elementoLiDelError.textContent = arrayConLosValoresDeLasValidaciones[i];
            elementoLiDelError.className = "mensajes-de-error";
            $contenedorErrores.appendChild(elementoLiDelError);
            aparecerContenedorErrores();
        } else {
            document.querySelector(`[name="input-salario${i + 1}"]`).className = "";
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
    $contenedorErrores.className = "";
};
function ocultarContenedorErrores() {
    $contenedorErrores.className = "invisible";
};