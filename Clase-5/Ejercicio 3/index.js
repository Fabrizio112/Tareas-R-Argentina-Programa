//Ejercicio 3: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


let contenedorDeNumeros = [];

function obtenerNumerosDeLaLista(contenedorDeNumeros) {
    let $contenedorLi = document.querySelectorAll("li");
    for (let i = 0; i < $contenedorLi.length; i++) {
        contenedorDeNumeros[i] = Number($contenedorLi[i].textContent);
    }
    console.log(contenedorDeNumeros);
}
obtenerNumerosDeLaLista(contenedorDeNumeros);

let promedio;
function calcularElPromedio(contenedorDeNumeros) {
    let acumulador = 0;
    for (let i = 0; i < contenedorDeNumeros.length; i++) {
        acumulador += contenedorDeNumeros[i];
    }
    promedio = acumulador / contenedorDeNumeros.length;
}

let menor;
function calcularElMasChico(contenedorDeNumeros) {
    for (let i = 0; i < contenedorDeNumeros.length; i++) {
        if (i === 0) {
            menor = contenedorDeNumeros[i];
        } else if (menor > contenedorDeNumeros[i]) {
            menor = contenedorDeNumeros[i];
        } else { }
    }
}


let mayor;
function calcularElMasGrande(contenedorDeNumeros) {
    for (let i = 0; i < contenedorDeNumeros.length; i++) {
        if (i === 0) {
            mayor = contenedorDeNumeros[i];
        } else if (mayor < contenedorDeNumeros[i]) {
            mayor = contenedorDeNumeros[i];
        } else { }
    }
}

let numeroMasRepetido;
function elQueMasSeRepite(contenedorDeNumeros) {
    for (let i = 0; i < contenedorDeNumeros.length; i++) {
        let banderaRepetido = 1;
        let auxMasRepetido = 0;
        let contador = 0;
        for (let x = 1; x < contenedorDeNumeros.length; x++) {
            if (contenedorDeNumeros[x] === contenedorDeNumeros[i]) {
                contador++;
            }
        }
        if (contador >= 2) {
            if (banderaRepetido === 1) {
                auxMasRepetido = contador;
                numeroMasRepetido = contenedorDeNumeros[i];
                banderaRepetido = 0;
            } else if (banderaRepetido === 0) {
                if (contador > auxMasRepetido) {
                    auxMasRepetido = contador;
                    numeroMasRepetido = contenedorDeNumeros[i];
                } else {
                }
            } else { }
        }

    }
}


let $botonCalcular = document.querySelector("#boton");
$botonCalcular.onclick = function () {
    calcularElPromedio(contenedorDeNumeros)
    calcularElMasChico(contenedorDeNumeros);
    calcularElMasGrande(contenedorDeNumeros);
    elQueMasSeRepite(contenedorDeNumeros);
    document.querySelector("#prom").textContent = `El promedio es   ${promedio}`
    document.querySelector("#small").textContent = `El numero mas pequeño es  ${menor}`
    document.querySelector("#big").textContent = `EL numero mas grande es   ${mayor}`
    document.querySelector("#repite").textContent = `El numero que mas se repite es   ${numeroMasRepetido}`
    return false;
}










