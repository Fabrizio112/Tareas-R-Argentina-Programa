// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function saludarAlUsuario() {
    let nombreDelUsuario = prompt("Cual es tu nombre?").toLowerCase();
    let miNombre = "fabrizio";
    let nombreDeMiHermano = "maxi";
    if (nombreDelUsuario === miNombre) {
        console.log(`Hola ,Tocayo! Yo tambien me llamo ${nombreDelUsuario}`);
    } else if (nombreDelUsuario === nombreDeMiHermano) {
        console.log(`Hola ${nombreDelUsuario} te llamas igual que mi Hermano`);
    } else {
        console.log(`Hola ${nombreDelUsuario}`);
    }
}

/* saludarAlUsuario(); */


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function compararLaEdadDelUsuarioConLaNuestra() {
    let edadDelUsuario = Number(prompt("Cual es tu edad?"));
    let miEdad = 20;
    if (edadDelUsuario > miEdad) {
        console.log(`Wow tenes mas edad que yo jejej`);
    } else if (edadDelUsuario < miEdad) {
        console.log(`Tengo mas edad que vos jijiji`);
    } else {
        console.log(`Tenemos la misma edad wii`);
    }
}
/* compararLaEdadDelUsuarioConLaNuestra(); */

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
function edadParaEntrarAlBar() {
    let edadDelUsuario = Number(prompt("Que edad tenes?"));
    if (edadDelUsuario >= 18) {
        console.log("Podes ingresar al bar");
    } else if (edadDelUsuario < 18) {
        console.log("Perdona No podes ingresar al bar");
    } else if (edadDelUsuario === null) {
        return edadParaEntrarAlBar();
    } else {
        console.log("No entendi lo que dijiste");
        return edadParaEntrarAlBar();
    }
}


function dejarEntrarAlBarONo() {
    let usuarioPoseeDocumento = prompt(`Tenes el documento par poder verlo(Si/No)`);
    if (usuarioPoseeDocumento.toLowerCase() === "si") {
        edadParaEntrarAlBar();
    } else if (usuarioPoseeDocumento.toLowerCase() === "no") {
        console.log("No podes ingresar al bar");
    } else if (usuarioPoseeDocumento === null) {
        return dejarEntrarAlBarONo();
    } else {
        console.log("No entendi lo que me dijiste");
        return dejarEntrarAlBarONo();
    }
}

dejarEntrarAlBarONo();