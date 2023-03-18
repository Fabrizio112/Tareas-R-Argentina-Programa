//Ejercicio2: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let $botonCalcular = document.querySelector("#calcular");
let $contenedor = document.querySelector(".contenedor-clases");
let $contenedorDelTitulo = document.querySelector(".titulo-de-clases")
let $contenedorDeBotones = document.querySelector(".botones");
let $botonCalcularTiempo = document.querySelector("#tiempo");
let $inputHoras = document.querySelector(".horas")
let $inputMinutos = document.querySelector(".minutos")
let $inputSegundos = document.querySelector(".segundos")
let $inputCantidadDeClasesDeArgentinaPrograma = document.querySelector("#cantidad-de-clases-totales");
let $resultado = document.querySelector("#resultado");
let $botonResetear = document.querySelector("#reset")

$botonCalcular.onclick = function () {
    var cantidadDeClasesDeArgentinaPrograma = document.querySelector("#clases");
    let exito = manejarError(Number(cantidadDeClasesDeArgentinaPrograma.value), cantidadDeClasesDeArgentinaPrograma)
    if (exito === 1) {
    } else {
        ocultarAlgunElemento(document.querySelector(".cuantas-clases"))
        crearLasClasesDeArgentinaPrograma(cantidadDeClasesDeArgentinaPrograma.value);
        aparecerAlgunElemento($contenedorDeBotones);
        colocarCantidadDeClasesDeArgentinaProgramaAlInputCorrespondiente(cantidadDeClasesDeArgentinaPrograma.value);
    }
    return false;
}
function ocultarAlgunElemento(a) {
    a.classList.add("d-none")
}
function aparecerAlgunElemento(a) {
    a.classList.remove("d-none");
}
function crearLasClasesDeArgentinaPrograma(a) {
    let $contenedorClasesArgentina = document.querySelector(".clase-de-argentina-programa");
    for (let i = 0; i < a; i++) {
        let contenedorClases = document.createElement('div');
        contenedorClases.classList.add("contenedor-clases", "col", "my-3")
        let divTitulo = document.createElement('div')
        divTitulo.classList.add("d-flex", "flex-column")
        let titulo = document.createElement("h1");
        let textotitulo = document.createTextNode(`Clase Numero ${i + 1}`);
        titulo.appendChild(textotitulo);
        divTitulo.appendChild(titulo)
        let spanDuracion = document.createElement('span')
        let tituloDelSpan = document.createTextNode('Duracion:')
        spanDuracion.appendChild(tituloDelSpan)
        spanDuracion.classList.add("text-decoration-underline", "fs-4")
        let divHoras = document.createElement('div');
        let labelHoras = document.createElement('label')
        labelHoras.classList.add("form-label", "fs-4")
        let labelTextHoras = document.createTextNode('Horas:')
        labelHoras.appendChild(labelTextHoras);
        let inputHoras = document.createElement('input')
        inputHoras.classList.add("form-control", "rounded")
        divHoras.appendChild(labelHoras)
        divHoras.appendChild(inputHoras)
        divHoras.classList.add("d-flex", "flex-column")
        let divMinutos = document.createElement('div');
        let labelMinutos = document.createElement('label')
        let labelTextMin = document.createTextNode('Minutos:')
        labelMinutos.appendChild(labelTextMin);
        labelMinutos.classList.add("form-label", "fs-4")
        let inputMinutos = document.createElement('input')
        inputMinutos.classList.add("form-control", "rounded")
        divMinutos.appendChild(labelMinutos)
        divMinutos.appendChild(inputMinutos)
        let divSegundos = document.createElement('div');
        let labelSegundos = document.createElement('label')
        let labelTextSegundos = document.createTextNode('Segundos:')
        labelSegundos.appendChild(labelTextSegundos);
        labelSegundos.classList.add("form-label", "fs-4")
        let inputSegundos = document.createElement('input')
        inputSegundos.classList.add("form-control", "rounded")
        divSegundos.appendChild(labelSegundos)
        divSegundos.appendChild(inputSegundos)
        inputHoras.id = (`horas-${i + 1}`);
        inputMinutos.id = (`minutos-${i + 1}`);
        inputSegundos.id = (`segundos-${i + 1}`);
        contenedorClases.appendChild(divTitulo)
        contenedorClases.appendChild(spanDuracion)
        contenedorClases.appendChild(divHoras)
        contenedorClases.appendChild(divMinutos)
        contenedorClases.appendChild(divSegundos)
        $contenedorClasesArgentina.appendChild(contenedorClases)
    }
}
function colocarCantidadDeClasesDeArgentinaProgramaAlInputCorrespondiente(a) {
    $inputCantidadDeClasesDeArgentinaPrograma.value = Number(`${a}`);
}
function resetearElInputQuePoseeLaCantidadDeClasesDeArgentinaPrograma() {
    $inputCantidadDeClasesDeArgentinaPrograma.value = "";
}

$botonCalcularTiempo.onclick = function () {
    let errores = {
        erroresHoras: [],
        erroresMinutos: [],
        erroresSegundos: [],
    }
    let inputsTotalesDeHoras = document.querySelectorAll(`[id*="horas-"]`)
    inputsTotalesDeHoras.forEach(input => {
        let exito = manejarErrorDeLosInputs(input.value, input)
        if (exito) {
            errores.erroresHoras.push(validarElInput(input.value))
        }
    })
    let inputsTotalesDeMinutos = document.querySelectorAll(`[id*="minutos-"]`)
    inputsTotalesDeMinutos.forEach(input => {
        let exito = manejarErrorDeLosInputs(input.value, input)
        if (exito) {
            errores.erroresMinutos.push(validarElInput(input.value))
        }
    })
    let inputsTotalesDeSegundos = document.querySelectorAll(`[id*="segundos-"]`)
    inputsTotalesDeSegundos.forEach(input => {
        let exito = manejarErrorDeLosInputs(input.value, input)
        if (exito) {
            errores.erroresSegundos.push(validarElInput(input.value))
        }
    })
    let exitoObjeto = manejarErroresDelObjeto(errores) === 0
    if (exitoObjeto) {
        let horasTotales = 0;
        let minutosTotales = 0;
        let segundosTotales = 0;
        for (let x = Number($inputCantidadDeClasesDeArgentinaPrograma.value); x >= 1; x--) {
            horasTotales += Number(document.querySelector(`#horas-${x}`).value);
            minutosTotales += Number(document.querySelector(`#minutos-${x}`).value);
            segundosTotales += Number(document.querySelector(`#segundos-${x}`).value);
            for (let m = Number($inputCantidadDeClasesDeArgentinaPrograma.value); m >= 1; m--) {
                if (minutosTotales > 60) {
                    minutosTotales -= 60;
                    horasTotales += 1;
                }
                if (segundosTotales > 60) {
                    segundosTotales -= 60;
                    minutosTotales += 1;
                }
            }
        }
        document.querySelector("#resultado-horas").textContent = `Horas totales: ${horasTotales} `;
        document.querySelector("#resultado-minutos").textContent = ` Minutos Totales:${minutosTotales}`;
        document.querySelector("#resultado-segundos").textContent = `Segundos Totales:${segundosTotales}`;
        aparecerAlgunElemento($resultado);
    }

    return false;
}

$botonResetear.onclick = function () {
    ocultarAlgunElemento($resultado)
    eliminarLasClasesDeArgentinaPrograma()
    ocultarAlgunElemento($contenedorDeBotones)
    aparecerAlgunElemento(document.querySelector(".cuantas-clases"))
    resetearElInputQuePoseeLaCantidadDeClasesDeArgentinaPrograma();
    ocultarContenedorDeErrores();
}

function eliminarLasClasesDeArgentinaPrograma() {
    document.querySelectorAll(".contenedor-clases").forEach(clases => {
        clases.remove();
    })
}
