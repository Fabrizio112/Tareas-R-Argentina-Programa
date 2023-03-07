
function validarElInput(a) {
    if (/[1-9]\.[1-9]*/.test(a)) {
        return `Este campo no acpeta numeros decimales`
    }
    if (/^[0]/.test(a)) {
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
        document.querySelector("#cantidad-familia").classList.remove("border", "border-dark");
        document.querySelector("#cantidad-familia").classList.add("border", "border-danger", "border-4");
        contadorErrores++;
        let elementoLiDelError = document.createElement("li");
        elementoLiDelError.textContent = errorInput;
        elementoLiDelError.classList.add("fs-4");
        elementoLiDelError.id = "hola";
        $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded");
        $contenedorErrores.appendChild(elementoLiDelError);
        aparecerContenedorErrores();
    } else {
        document.querySelector("#cantidad-familia").classList.remove("border", "border-danger", "border-4");
        document.querySelector("#cantidad-familia").classList.add("border", "border-dark");
        ocultarContenedorErrores();
    }
    return contadorErrores;
}

function manejarErrores(arrayConElResultadoDeLasValidaciones) {
    let contadorErrores = 0;
    borrarMensajesDeError();
    for (i = 0; i < arrayConElResultadoDeLasValidaciones.length; i++) {
        if (arrayConElResultadoDeLasValidaciones[i].length > 0) {
            document.querySelector(`[name="input${i + 1}"]`).classList.remove("border", "border-dark");
            document.querySelector(`[name="input${i + 1}"]`).classList.add("border", "border-danger", "border-4");
            contadorErrores++;
            let elementoLiDelError = document.createElement("li");
            elementoLiDelError.textContent = arrayConElResultadoDeLasValidaciones[i];
            elementoLiDelError.id = "hola";
            elementoLiDelError.classList.add("fs-4");
            $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded");
            $contenedorErrores.appendChild(elementoLiDelError)
            aparecerContenedorErrores();
        } else {
            document.querySelector(`[name="input${i + 1}"]`).classList.remove("border", "border-danger", "border-4");
            document.querySelector(`[name="input${i + 1}"]`).classList.add("border", "border-dark");
            if (contadorErrores === 0) {
                ocultarContenedorErrores();
            }
        }
    }
    return contadorErrores;
}


function borrarMensajesDeError() {
    document.querySelectorAll(`[id="hola"]`).forEach(function (a) {
        a.remove();
    })
}
