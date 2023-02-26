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

$botonSiguiente.onclick = function () {
    let cantidadDePersonasEnElGrupoFamilia = Number(document.querySelector("#cantidad-familia").value);
    borrarIntegranteDeLaFamilia(cantidadDePersonasEnElGrupoFamilia);
    crearIntegrantesDeLaFamilia(cantidadDePersonasEnElGrupoFamilia);
    document.querySelector("#botones").style.display = "inline-block";
    document.querySelector("#reset").style.display = "inline-block";
    aparecerEntradaDePersonas();
    aparecerBotonDeCalcular();
    aparecerBotonEmpezarDeNuevo();
    ocultarPartePrincipalDelPrograma();
    return false;
}

function crearIntegrantesDeLaFamilia(a) {
    for (let i = 1; i <= a; i++) {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.className = "contenedor-de-personas";
        let nuevoLabel = document.createElement("label");
        let nuevoLabelTitulo = document.createTextNode(`Integrante N°${i}`);
        nuevoLabel.appendChild(nuevoLabelTitulo);
        let nuevoInput = document.createElement("input");
        nuevoInput.className = `input`;
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


let valoresDeLosInputsDeLasEdades = [];


$botonCalcularEdades.onclick = function () {
    let $inputsValor = document.querySelectorAll(".input");
    for (let i = 0; i < $inputsValor.length; i++) {
        valoresDeLosInputsDeLasEdades[i] = Number($inputsValor[i].value);
    }
    document.querySelector("#mayor").textContent = `La mayor edad de todas es ${laMayorEdadDeTodas(valoresDeLosInputsDeLasEdades)}`;
    document.querySelector("#menor").textContent = `La menor edad de todas es ${laMenorEdadDeTodas(valoresDeLosInputsDeLasEdades)}`;
    document.querySelector("#promedio").textContent = `El promedio de  edad de todo el grupo familiar es ${promedioDelGrupo(valoresDeLosInputsDeLasEdades)}`;
    document.querySelector("#resultado").style.display = "block";
    $botonCalcularEdades.style.display = "none";
    document.querySelector("#resultado").style.display = "block";
    ocultarEntradaDePersonas();
    return false;
}

let mayor = 0;
function laMayorEdadDeTodas(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > mayor) {
            mayor = a[i];
        }
    }
    return mayor;
}
let menor;
function laMenorEdadDeTodas(a) {
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

let promedio;
function promedioDelGrupo(a) {
    let contador = 0;
    for (let i = 0; i < a.length; i++) {
        contador += a[i];
    }
    promedio = contador / a.length;
    return promedio;
}


$botonEmpezarDeNuevo.onclick = function () {
    document.querySelector("#resultado").style.display = "none";
    document.querySelector("#entrada-personas").style.display = "none";
    ocultarBotonEmpezarDeNuevo();
    aparecerPartePrincipalDelPrograma();
    ocularBotonDeCalcular();
    return false;
}

let $labelPersonas = document.querySelector("#label-personas");
let $inputCantidadDeIntegrantes = document.querySelector("#cantidad-familia");

function ocultarPartePrincipalDelPrograma() {
    $botonSiguiente.style.display = "none";
    $inputCantidadDeIntegrantes.style.display = "none";
    $labelPersonas.style.display = "none";
}
function aparecerPartePrincipalDelPrograma() {
    $botonSiguiente.style.display = "block";
    $inputCantidadDeIntegrantes.style.display = "block";
    $labelPersonas.style.display = "block";
}

function ocularBotonDeCalcular() {
    $botonCalcularEdades.style.display = "none";
}
function aparecerBotonDeCalcular() {
    $botonCalcularEdades.style.display = "inline-block";
}
function ocultarBotonEmpezarDeNuevo() {
    $botonEmpezarDeNuevo.style.display = "none";
}
function aparecerBotonEmpezarDeNuevo() {
    $botonEmpezarDeNuevo.style.display = "inline-block";
}
function aparecerEntradaDePersonas() {
    document.querySelector("#entrada-personas").style.display = "block";
}
function ocultarEntradaDePersonas() {
    document.querySelector("#entrada-personas").style.display = "none";
}