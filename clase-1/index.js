// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

function calcularLaEdadDelUsuario() {
    let añoActual = Number(prompt("Ingrese el año Actual"));
    let añoNacimiento = Number(prompt("Ingrese el año en que nació"));
    console.log(`Su edad es ${añoActual - añoNacimiento} años`);
}
/* calcularLaEdadDelUsuario ()*/

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularElSalarioMensual() {
    let usuarioSalarioAnual = Number(prompt("Cuanto cobras al año?"));
    console.log(`Su salario mensual es $${usuarioSalarioAnual / 12}`);
}
/* calcularElSalarioMensual(); */



