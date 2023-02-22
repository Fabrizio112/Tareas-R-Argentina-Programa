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


$botonCalcular.onclick = function () {
    var cantidadDeClasesDeArgentinaPrograma = Number(document.querySelector("#clases").value);
    document.querySelector(".cuantas-clases").style.display = "none";
    let $contenedorClases = document.querySelector(".clase-de-argentina-programa");
    let titulo = document.createElement("h1");
    let textotitulo = document.createTextNode(`Clase Numero`);
    titulo.appendChild(textotitulo);
    $contenedorDelTitulo.insertAdjacentElement("afterbegin", titulo);
    for (let i = 0; i <= cantidadDeClasesDeArgentinaPrograma; i++) {
        $contenedorClases.appendChild($contenedor.cloneNode(true));
        $contenedor.style.display = "inline-block";
        titulo.textContent = `Clase Numero ${i + 1}`;
        $inputHoras.className = `horas-${i + 1}`;
        $inputMinutos.className = `minutos-${i + 1}`;
        $inputSegundos.className = `segundos-${i + 1}`;
    }
    $contenedor.className = "dissapear";
    document.querySelector(".dissapear").style.display = "none";
    $contenedorDeBotones.style.display = "inline-block";
    $inputCantidadDeClasesDeArgentinaPrograma.placeholder = Number(`${cantidadDeClasesDeArgentinaPrograma}`);
    return false;
}

let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;
$botonCalcularTiempo.onclick = function () {
    for (let x = $inputCantidadDeClasesDeArgentinaPrograma.placeholder; x >= 1; x--) {
        horasTotales += Number(document.querySelector(`.horas-${x}`).value);
        minutosTotales += Number(document.querySelector(`.minutos-${x}`).value);
        segundosTotales += Number(document.querySelector(`.segundos-${x}`).value);
        for (let m = $inputCantidadDeClasesDeArgentinaPrograma.placeholder; m >= 1; m--) {
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
    document.querySelector("strong").textContent = `Horas totales: ${horasTotales} , Minutos Totales=${minutosTotales},Segundos Totales=${segundosTotales}`;
    document.querySelector("strong").style.fontSize = "20px";
    document.querySelector("#resultado").style.display = "block";
    return false;
}
