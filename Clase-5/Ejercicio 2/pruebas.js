function validarElInput(a) {
    if (!/[1-9]/.test(a)) {
        return `Se debe ingresar un numero entero`
    } if (a.length === 0) {
        return `No se puede enviar vacio el campo`
    }
    return "";
}

let $contenedorErrores = document.querySelector("#contenedor-errores")

function manejarError(a, b) {
    borrarMensajesDeError();
    let error = validarElInput(a)
    let contadorErrores = 0
    if (error) {
        contadorErrores++;
        b.classList.add("border", "border-danger", "border-3");
        let elementoLiDelError = document.createElement("li");
        elementoLiDelError.textContent = error;
        elementoLiDelError.classList.add("mensaje-de-error", "fs-4");
        $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded")
        $contenedorErrores.appendChild(elementoLiDelError);
        mostarContenedorDeErrores();
    } else {
        b.classList.remove("border", "border-danger", "border-3");
        ocultarContenedorDeErrores();
    }
    return contadorErrores;
}
function manejarErrorDeLosInputs(a, b) {
    borrarMensajesDeError();
    let error = validarElInput(a)
    let contadorErrores = 0
    if (error) {
        contadorErrores++;
        b.classList.add("coloreate-mas-tarde");
    } else {
        b.classList.remove("coloreate-mas-tarde");
        b.classList.remove("border", "border-danger", "border-3");
    }
    return contadorErrores;
}
function manejarErroresDelObjeto(errores) {
    console.log(errores)
    borrarMensajesDeError();
    let contadorErrores = 0;
    let values = Object.values(errores)
    console.log(values)
    values.forEach(value => {
        value.forEach((minivalue, i) => {
            console.log(minivalue)
            const error = value[i]
            if (error) {
                contadorErrores++;
                let elementoLiDelError = document.createElement("li");
                elementoLiDelError.textContent = error;
                elementoLiDelError.classList.add("mensaje-de-error", "fs-4");
                $contenedorErrores.classList.add("bg-danger", "text-center", "text-light", "p-3", "my-4", "border", "rounded")
                $contenedorErrores.appendChild(elementoLiDelError);

            } else {
                document.querySelector("#clases").classList.remove("border", "border-danger", "border-3");

            }
        })
    })
    if (contadorErrores > 1) {
        document.querySelectorAll(".coloreate-mas-tarde").forEach(input => {
            input.classList.add("border", "border-danger", "border-3");
        })
        mostarContenedorDeErrores();
    } else {
        ocultarContenedorDeErrores();
    }
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