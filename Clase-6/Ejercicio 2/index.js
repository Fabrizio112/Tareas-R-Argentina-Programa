
/*
EJERCICIO 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
let $botonAgregar = document.querySelector("#agregar");
let $botonQuitar = document.querySelector("#quitar");
let $botonCalcular = document.querySelector("#calcular");
let iteracionesConLosInputs = 0;
$botonAgregar.onclick = function () {
    agregarInputsParaIngresarSalario(iteracionesConLosInputs);
    iteracionesConLosInputs++;
    return false;
}

$botonQuitar.onclick = function () {
    eliminarInputsParaIngresarSalario(iteracionesConLosInputs);
    iteracionesConLosInputs--;
    return false;
}

function agregarInputsParaIngresarSalario(i) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = `minibox`;
    let nuevoLabel = document.createElement("label");
    let nuevoLabelTexto = document.createTextNode(`Ingrese su salario Anual Persona ${i + 1} : `);
    nuevoLabel.appendChild(nuevoLabelTexto);
    let nuevoInput = document.createElement("input");
    nuevoInput.type = "number";
    nuevoInput.className = `input`;
    nuevoDiv.appendChild(nuevoLabel);
    nuevoDiv.appendChild(nuevoInput);
    document.querySelector(".container-inputs").appendChild(nuevoDiv);

}
function eliminarInputsParaIngresarSalario(i) {
    let arrayCotenedores = document.querySelectorAll(".minibox");
    arrayCotenedores[i - 1].remove();
}


$botonCalcular.onclick = function () {
    let $filtroInputs = document.querySelectorAll(".input");
    for (let x = 0; x < $filtroInputs.length; x++) {
        if (Number($filtroInputs[x].value) == 0) {
            $filtroInputs[x].className = "inputNoTomadoEnCuenta";
        }
    }
    let $valorInputs = document.querySelectorAll(".input");
    let valorDeLosInputs = [];
    for (let i = 0; i < $valorInputs.length; i++) {
        valorDeLosInputs[i] = Number($valorInputs[i].value);
    }
    document.querySelector("#mayor-anual").textContent = `El mayor salario anual es : ${mayorSalarioAnual(valorDeLosInputs)}`;
    document.querySelector("#menor-anual").textContent = `El menor salario anual es : ${menorSalarioAnual(valorDeLosInputs)}`;
    document.querySelector("#anual-promedio").textContent = `El salario anual promedio es : ${salarioAnualPromedio(valorDeLosInputs)}`;
    document.querySelector("#mensual-promedio").textContent = `El salario mensual promedio es : ${salarioMensualPromedio(valorDeLosInputs)}`;
    document.querySelector(".resultado").style.display = "block";
    return false
}

let mayor = 0;
let menor;
let promedioAnual;
let promedioMensual;

function mayorSalarioAnual(a) {
    for (let i = 0; i < a.length; i++) {
        if (mayor < a[i]) {
            mayor = a[i];
        } else {
        }
    }
    return mayor;
}
function menorSalarioAnual(a) {
    let aux = 1;
    for (let i = 0; i < a.length; i++) {
        if (aux === 1) {
            menor = a[i];
            aux = 0;
        } else if (menor > a[i]) {
            menor = a[i];
        }
    }
    return menor;
}
function salarioAnualPromedio(a) {
    let contadorAnual = 0
    for (let x = 0; x < a.length; x++) {
        contadorAnual += a[x];
    }
    promedioAnual = contadorAnual / a.length;
    return promedioAnual;
}
function salarioMensualPromedio(a) {
    let contadorMensual = 0
    for (let x = 0; x < a.length; x++) {
        contadorMensual += (a[x] / 12);
    }
    promedioMensual = contadorMensual / a.length;
    return promedioMensual;
}

