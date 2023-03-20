//Ejercicio 1: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


let $botonEnviar = document.querySelector("#boton");
let $formulario = document.querySelector("form");
$formulario.onsubmit = validarElFormulario;

function validarElFormulario() {
    let primerNombreDelUsuario = document.querySelector("#firstname-user").value;
    let segundoNombreDelUsuario = document.querySelector("#secondname-user").value;
    let apellidoDelUsuario = document.querySelector("#surname-user").value;
    let edadDelUsuario = Number(document.querySelector("#age-user").value);
    const errorPrimerNombre = validarEInputTexto(primerNombreDelUsuario)
    const errorSegundoNombre = validarEInputTexto(segundoNombreDelUsuario)
    const errorApellido = validarEInputTexto(apellidoDelUsuario)
    const errorEdadDelUsuario = validarElInputNumero(edadDelUsuario)
    const errores = {
        primerNombre: errorPrimerNombre,
        segundoNombre: errorSegundoNombre,
        apellido: errorApellido,
        edad: errorEdadDelUsuario,
    }
    let $titulo = document.querySelector("h1");
    let exito = manejarErrores(errores) === 0
    if (exito) {
        esconderFormulario();
        ocultarContenedorDeErrores();
        mostrarMensaje(primerNombreDelUsuario, segundoNombreDelUsuario, apellidoDelUsuario, edadDelUsuario, $titulo);
    }
    return false;

}

function esconderFormulario() {
    document.querySelector("form").classList.add("d-none");
}
function mostrarMensaje(a, b, c, d, t) {
    t.textContent = `Bienvenido! ${a} ${b} ${c} de ${d} años de edad`;
}