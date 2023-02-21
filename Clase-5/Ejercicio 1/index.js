//Ejercicio 1: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


let $botonEnviar = document.querySelector("#boton");
$botonEnviar.onclick = function () {
    let primerNombreDelUsuario = document.querySelector("#firstname-user").value;
    let segundoNombreDelUsuario = document.querySelector("#secondname-user").value;
    let apellidoDelUsuario = document.querySelector("#surname-user").value;
    let edadDelUsuario = Number(document.querySelector("#age-user").value);
    let $titulo = document.querySelector("h1");
    let $contenedor = document.querySelector(".container");
    document.querySelector("form").style.display = "none";
    $titulo.textContent = `Bienvenido! ${primerNombreDelUsuario} ${segundoNombreDelUsuario} ${apellidoDelUsuario} de ${edadDelUsuario} años de edad`;
    $contenedor.style.display = "flex";
    $contenedor.style.justifyContent = "center";
    $contenedor.style.alignItems = "center";
    $titulo.style.width = "100%";
    $titulo.style.height = "100%";
    $titulo.style.textAlign = "center";

    return false;

}

