
function validarElInput(a) {
    if (/[1-9]\.[1-9]*/.test(a)) {
        return `Este campo no acpeta numeros decimales`
    }
    if (/[0]/.test(a)) {
        return `Este campo no puede enviarse con un cero`;
    }
    if (!/[1-9]/.test(a)) {
        return `Este campo solo puede tener numeros enteros`;
    }
    return "";
}

function manejarError(errorInput) {
    let contadorErrores = 0;
    borrarMensajesDeError();
    if (errorInput) {
        document.querySelector("#cantidad-familia").className = "error";
        contadorErrores++;
        let elementoLiDelError = document.createElement("li");
        elementoLiDelError.textContent = errorInput;
        elementoLiDelError.className = "hola";
        $contenedorErrores.appendChild(elementoLiDelError);
        aparecerContenedorErrores();
    } else {
        document.querySelector("#cantidad-familia").className = "";
        ocultarContenedorErrores();
    }
    return contadorErrores;
}

function manejarErrores(arrayConElResultadoDeLasValidaciones) {
    let contadorErrores = 0;
    borrarMensajesDeError();
    for (i = 0; i < arrayConElResultadoDeLasValidaciones.length; i++) {
        if (arrayConElResultadoDeLasValidaciones[i].length > 0) {
            document.querySelector(`[name="input${i + 1}"]`).className = "error";
            contadorErrores++;
            let elementoLiDelError = document.createElement("li");
            elementoLiDelError.textContent = arrayConElResultadoDeLasValidaciones[i];
            elementoLiDelError.className = "hola";
            $contenedorErrores.appendChild(elementoLiDelError)
            aparecerContenedorErrores();
        } else {
            document.querySelector(`[name="input${i + 1}"]`).className = "";
            ocultarContenedorErrores();
        }
    }
    return contadorErrores;
}


function borrarMensajesDeError() {
    document.querySelectorAll(".hola").forEach(function (a) {
        a.remove();
    })
}
