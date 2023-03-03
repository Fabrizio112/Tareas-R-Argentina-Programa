
/*
EJERCICIO 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
let $botonAgregar = document.querySelector("#agregar");
let $botonQuitar = document.querySelector("#quitar");
let $botonCalcular = document.querySelector("#calcular");
document.querySelector("#valor-inputs").value = 0;
let $inputContador = document.querySelector("#valor-inputs")

$botonAgregar.onclick = function () {
    adicionDelContadorDeLosInputs();
    let valorDelInputDelContador = document.querySelector("#valor-inputs").value;
    agregarInputsParaIngresarSalario(valorDelInputDelContador);
    return false;
}

$botonQuitar.onclick = function () {
    let valorDelInputDelContador = document.querySelector("#valor-inputs").value;
    verificarSiEsCeroElValor();
    eliminarInputsParaIngresarSalario(valorDelInputDelContador);
    disminuirDelContadorDeLosInputs();
    return false;
}

function agregarInputsParaIngresarSalario(i) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = `minibox${i}`;
    let nuevoLabel = document.createElement("label");
    let nuevoLabelTexto = document.createTextNode(`Ingrese su salario Anual Persona ${i} : `);
    nuevoLabel.appendChild(nuevoLabelTexto);
    let nuevoInput = document.createElement("input");
    nuevoInput.name = `input-salario${i}`;
    nuevoInput.type = "number";
    nuevoInput.className = `input`;
    nuevoDiv.appendChild(nuevoLabel);
    nuevoDiv.appendChild(nuevoInput);
    document.querySelector(".container-inputs").appendChild(nuevoDiv);

}
function eliminarInputsParaIngresarSalario(a) {
    document.querySelector(`.minibox${a}`).remove();

}
function adicionDelContadorDeLosInputs() {
    document.querySelector("#valor-inputs").value++;
}
function disminuirDelContadorDeLosInputs() {
    document.querySelector("#valor-inputs").value--;
}

//Esta funcion se puede probar con el console.assert
function verificarSiEsCeroElValor() {
    if (document.querySelector("#valor-inputs").value == 0) {
        alert(`No hay nada mas por eliminar!!!!!`);
    }
}




$botonCalcular.onclick = function () {
    borrarMensajesDeError();
    ocultarContenedorErrores();
    ocultarElContenedorDeLosResultados();
    esCeroONo();
    return false
}

function esCeroONo() {
    if (Number($inputContador.value) === 0) {
        alert("No se puede calcular si no agregas nada ,Por favor agrega casilleros para realizar tu calculo");
    } else {
        ocultarElContenedorDeLosResultados();
        let arrayConLosValoresDeLasValidaciones = [];
        llenarElArrayConLasValidacionesDeLosInputs(arrayConLosValoresDeLasValidaciones);
        manejarError(arrayConLosValoresDeLasValidaciones);
        const exito = manejarError(arrayConLosValoresDeLasValidaciones) === 0
        if (exito) {
            resetearLaClaseDeLosInputs();
            filtroDeInputsEnBlanco();
            let valorDeLosInputs = []
            llenarElArrayConElValorDeLosImputs(valorDeLosInputs);
            llenarLosResultados(valorDeLosInputs);
            aparecerElContenedorDeLosResultados();
        }
        else { }
    }
}

function mayorSalarioAnual(a) {
    let mayor = 0;
    for (let i = 0; i < a.length; i++) {
        if (mayor < a[i]) {
            mayor = a[i];
        } else {
        }
    }
    return mayor;
}
function menorSalarioAnual(a) {
    let menor;
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
    let promedioAnual;
    let contadorAnual = 0
    for (let x = 0; x < a.length; x++) {
        contadorAnual += a[x];
    }
    promedioAnual = contadorAnual / a.length;
    return promedioAnual;
}
function salarioMensualPromedio(a) {
    let promedioMensual;
    let contadorMensual = 0
    for (let x = 0; x < a.length; x++) {
        contadorMensual += (a[x] / 12);
    }
    promedioMensual = contadorMensual / a.length;
    return promedioMensual;
}

function resetearLaClaseDeLosInputs() {
    document.querySelectorAll(`[name*="input-salario"]`).forEach(function (input) {
        input.className = "input";
    })
}
function filtroDeInputsEnBlanco() {
    document.querySelectorAll(".input").forEach(function (inputFiltro) {
        if (Number(inputFiltro.value) === 0) {
            inputFiltro.className = "inputNoTomadoEnCuenta";
        }
    })
}
function llenarElArrayConLasValidacionesDeLosInputs(arrayConLosValoresDeLasValidaciones) {
    document.querySelectorAll(`[name*="input-salario"]`).forEach(function (input, indice) {
        arrayConLosValoresDeLasValidaciones[indice] = validarElInput(input.value);
    })
}

function llenarElArrayConElValorDeLosImputs(valorDeLosInputs) {
    document.querySelectorAll(".input").forEach(function (input, indice) {
        valorDeLosInputs[indice] = Number(input.value);
    })
}
function llenarLosResultados(valorDeLosInputs) {
    document.querySelector("#mayor-anual").textContent = `El mayor salario anual es : ${mayorSalarioAnual(valorDeLosInputs)}`;
    document.querySelector("#menor-anual").textContent = `El menor salario anual es : ${menorSalarioAnual(valorDeLosInputs)}`;
    document.querySelector("#anual-promedio").textContent = `El salario anual promedio es : ${salarioAnualPromedio(valorDeLosInputs)}`;
    document.querySelector("#mensual-promedio").textContent = `El salario mensual promedio es : ${salarioMensualPromedio(valorDeLosInputs)}`;
}
function aparecerElContenedorDeLosResultados() {
    document.querySelector(".resultado").style.display = "block";
}
function ocultarElContenedorDeLosResultados() {
    document.querySelector(".resultado").style.display = "none";
}