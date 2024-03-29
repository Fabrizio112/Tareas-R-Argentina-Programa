/*
EJERCICIO 1:
 Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let $botonSiguiente = document.querySelector("#calcular-familia");
let $botonCalcularEdades = document.querySelector("#calcular-edad");
let $botonEmpezarDeNuevo = document.querySelector("#reset");

let $contenedorErrores = document.querySelector("#contenedor-errores");

$botonSiguiente.onclick = function () {
    let cantidadDePersonasEnElGrupoFamilia = document.querySelector("#cantidad-familia").value;
    const errorInput = validarElInput(cantidadDePersonasEnElGrupoFamilia);
    manejarError(errorInput);
    const exito = manejarError(errorInput) === 0;
    if (exito) {
        borrarIntegranteDeLaFamilia(cantidadDePersonasEnElGrupoFamilia);
        crearIntegrantesDeLaFamilia(cantidadDePersonasEnElGrupoFamilia);
        aparecerContenedorBotones()
        aparecerEntradaDePersonas();
        aparecerBotonDeCalcular();
        aparecerBotonEmpezarDeNuevo();
        ocultarPartePrincipalDelPrograma();
    } else { }
    return false;
}

function crearIntegrantesDeLaFamilia(a) {
    for (let i = 1; i <= a; i++) {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.className = "contenedor-de-personas";
        let nuevoLabel = document.createElement("label");
        let nuevoLabelTitulo = document.createTextNode(`Integrante N°${i}`);
        nuevoLabel.appendChild(nuevoLabelTitulo);
        nuevoLabel.classList.add("form-label", "fs-3", "mb-2", "fw-bold")
        let nuevoInput = document.createElement("input");
        nuevoInput.classList.add("form-control", "border", "border-dark");
        nuevoInput.name = `input${i}`;
        nuevoInput.type = "number";
        nuevoDiv.appendChild(nuevoLabel);
        nuevoDiv.appendChild(nuevoInput);
        document.querySelector("#entrada-personas").appendChild(nuevoDiv);
    }
}
function borrarIntegranteDeLaFamilia() {
    let contenedorDeLosIntegrantesDeLaFamilia = document.querySelectorAll(".contenedor-de-personas");
    for (let i = 0; i < contenedorDeLosIntegrantesDeLaFamilia.length; i++) {
        contenedorDeLosIntegrantesDeLaFamilia[i].remove();
    }
}



$botonCalcularEdades.onclick = function () {
    let arrayConElResultadoDeLasValidaciones = [];
    llenarElArrayConElResultadoDeLasValidaciones(arrayConElResultadoDeLasValidaciones);
    manejarErrores(arrayConElResultadoDeLasValidaciones);
    const exitos = manejarErrores(arrayConElResultadoDeLasValidaciones) === 0;
    if (exitos) {
        resetearLaClaseDeLosInputs();
        filtrarLosInputsEnBlanco();
        let valoresDeLosInputsDeLasEdades = [];
        llenarElArrayConLosValoresDeLosInputs(valoresDeLosInputsDeLasEdades)
        llenarTextoConLosResultados(valoresDeLosInputsDeLasEdades);
        aparecerContenedorDelResultado();
        ocularBotonDeCalcular();
        aparecerContenedorDelResultado();
        ocultarEntradaDePersonas();
    } else { }

    return false;

}
function llenarElArrayConElResultadoDeLasValidaciones(arrayConElResultadoDeLasValidaciones) {
    document.querySelectorAll(`[name*="input"]`).forEach(function (input, indice) {
        arrayConElResultadoDeLasValidaciones[indice] = validarElInput(input.value);
    })
}


function laMayorEdadDeTodas(a) {
    let mayor = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > mayor) {
            mayor = a[i];
        }
    }
    return mayor;
}
function laMenorEdadDeTodas(a) {
    let menor;
    let ba = 1;
    for (let i = 0; i < a.length; i++) {
        if (ba === 1) {
            menor = a[i];
            ba = 0
        } else if (menor > a[i]) {
            menor = a[i];
        } else { }
    }
    return menor;
}
function promedioDelGrupo(a) {
    let promedio;
    let contador = 0;
    for (let i = 0; i < a.length; i++) {
        contador += a[i];
    }
    promedio = contador / a.length;
    return promedio;
}


$botonEmpezarDeNuevo.onclick = function () {
    ocultarContenedorDelResultado();
    ocultarEntradaDePersonas();
    ocultarBotonEmpezarDeNuevo();
    aparecerPartePrincipalDelPrograma();
    ocularBotonDeCalcular();
    ocultarContenedorErrores();
    return false;
}

let $labelPersonas = document.querySelector("#label-personas");
let $inputCantidadDeIntegrantes = document.querySelector("#cantidad-familia");

function ocultarPartePrincipalDelPrograma() {
    $botonSiguiente.classList.add("d-none");
    $inputCantidadDeIntegrantes.classList.add("d-none");
    $labelPersonas.classList.add("d-none");
}
function aparecerPartePrincipalDelPrograma() {
    $botonSiguiente.classList.remove("d-none");
    $inputCantidadDeIntegrantes.classList.remove("d-none");
    $labelPersonas.classList.remove("d-none");
}

function ocularBotonDeCalcular() {
    $botonCalcularEdades.classList.add("d-none");
}
function aparecerBotonDeCalcular() {
    $botonCalcularEdades.classList.remove("d-none");
}
function ocultarBotonEmpezarDeNuevo() {
    $botonEmpezarDeNuevo.classList.add("d-none");
}
function aparecerBotonEmpezarDeNuevo() {
    $botonEmpezarDeNuevo.classList.remove("d-none");
}
function aparecerEntradaDePersonas() {
    document.querySelector("#entrada-personas").classList.remove("d-none");
}
function ocultarEntradaDePersonas() {
    document.querySelector("#entrada-personas").classList.add("d-none");
}
function aparecerContenedorBotones() {
    document.querySelector("#botones").classList.remove("d-none");
}
function aparecerContenedorDelResultado() {
    document.querySelector("#resultado").classList.remove("d-none");
}
function ocultarContenedorDelResultado() {
    document.querySelector("#resultado").classList.add("d-none");
}
function llenarElArrayConLosValoresDeLosInputs(valoresDeLosInputsDeLasEdades) {
    document.querySelectorAll(".input").forEach(function (input, indice) {
        valoresDeLosInputsDeLasEdades[indice] = Number(input.value);
    });
}
function llenarTextoConLosResultados(valoresDeLosInputsDeLasEdades) {
    document.querySelector("#mayor").textContent = `La mayor edad de todas es ${laMayorEdadDeTodas(valoresDeLosInputsDeLasEdades)}`;
    document.querySelector("#menor").textContent = `La menor edad de todas es ${laMenorEdadDeTodas(valoresDeLosInputsDeLasEdades)}`;
    document.querySelector("#promedio").textContent = `El promedio de  edad de todo el grupo familiar es ${promedioDelGrupo(valoresDeLosInputsDeLasEdades)}`;
}

function filtrarLosInputsEnBlanco() {
    document.querySelectorAll(".input").forEach(function (inputFiltro) {
        if (Number(inputFiltro.value) === 0) {
            inputFiltro.className = "inputNoTomadoEnCuenta";
        }
    })
}
function resetearLaClaseDeLosInputs() {
    document.querySelectorAll(`[name*="input"]`).forEach(function (input) {
        input.classList.add("input");
    })
}

function ocultarContenedorErrores() {
    $contenedorErrores.classList.add("d-none");
}
function aparecerContenedorErrores() {
    $contenedorErrores.classList.remove("d-none");
} 