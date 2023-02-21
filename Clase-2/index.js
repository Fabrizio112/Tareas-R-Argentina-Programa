// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(a, b) {
    console.log(`El resultado de tu suma es ${a + b}`);
}

function restar(a, b) {
    console.log(`El resultado de tu resta es ${a - b}`);
}

let operador = prompt("Que operacion queres realizar (+,-)");

function operacionEnBaseAlOperador(operador) {
    let num1 = Number(prompt("Ingresa un numero"));
    let num2 = Number(prompt("Ingresa un numero"));
    if (operador == "+") {
        return sumar(num1, num2);
    } else {
        return restar(num1, num2);
    }
}

/* operacionEnBaseAlOperador(operador); */


