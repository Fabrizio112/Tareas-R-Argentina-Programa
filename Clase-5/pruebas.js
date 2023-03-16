function probarValidarElInput() {
    console.assert(
        validarElInput("-,.e") === `Este campo solo puede tener numeros enteros`,
        `Validar el input no valido que no se ingrese un numero que no sea entero`
    )
    console.assert(
        validarElInput("214124") === "",
        `Validar el input no valido que se realize un ingreso valido`
    )
}