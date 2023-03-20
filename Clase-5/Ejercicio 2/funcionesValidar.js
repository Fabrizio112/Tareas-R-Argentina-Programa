function pruebaValidarElInput() {
    console.assert(
        validarElInput(".-;e") === `Se debe ingresar un numero entero`,
        `Validar el input no valido que no se ingrese algo que no sea un numero`
    )
    console.assert(
        validarElInput("") === `No se puede enviar vacio el campo`,
        `Validar el input no valido que no se ingrese nada`
    )
    console.assert(
        validarElInput("3") === "",
        `Validar el input no valido que se ingrese un campo valido`
    )
}