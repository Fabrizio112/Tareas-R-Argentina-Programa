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

$botonCalcular.onclick = function () {
    var cantidadDeClasesDeArgentinaPrograma = Number(document.querySelector("#clases").value);
    ocultarContenedorInputsInicial();
    crearLasClasesDeArgentinaPrograma(cantidadDeClasesDeArgentinaPrograma);
    ocultarAlgunElemento($contenedor);
    aparecerAlgunElemento($contenedorDeBotones);
    colocarCantidadDeClasesDeArgentinaProgramaAlInputCorrespondiente(cantidadDeClasesDeArgentinaPrograma);
    return false;
}
function ocultarContenedorInputsInicial() {
    document.querySelector(".cuantas-clases").classList.add("d-none");
}
function ocultarAlgunElemento(a) {
    a.classList.add("d-none")
}
function aparecerAlgunElemento(a) {
    a.classList.remove("d-none");
}
function crearLasClasesDeArgentinaPrograma(a) {
    let $contenedorClases = document.querySelector(".clase-de-argentina-programa");
    let titulo = document.createElement("h1");
    let textotitulo = document.createTextNode(`Clase Numero`);
    titulo.appendChild(textotitulo);
    $contenedorDelTitulo.insertAdjacentElement("afterbegin", titulo);
    for (let i = 0; i <= a; i++) {
        $contenedorClases.appendChild($contenedor.cloneNode(true));
        $contenedor.style.display = "inline-block";
        $contenedor.classList.remove("d-none")
        titulo.textContent = `Clase Numero ${i + 1}`;
        $inputHoras.id = (`horas-${i + 1}`);
        $inputMinutos.id = (`minutos-${i + 1}`);
        $inputSegundos.id = (`segundos-${i + 1}`);
    }
}
function colocarCantidadDeClasesDeArgentinaProgramaAlInputCorrespondiente(a) {
    $inputCantidadDeClasesDeArgentinaPrograma.value = Number(`${a}`);
}


$botonCalcularTiempo.onclick = function () {
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
    return false;
}

