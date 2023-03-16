function probarValidarInputs() {
    console.assert(
        validarElInput("12.3") === `Este campo no acpeta numeros decimales`,
        `Validar Input no valido que no se ingresen decimales`
    )
    console.assert(
        validarElInput("0") === `Este campo no puede enviarse con un cero`,
        `Validar Input no valido que no se ingrese un cero como numero principal`
    );
    console.assert(
        validarElInput(".-;e") === `Este campo solo puede tener numeros enteros`,
        `Validar Input no valido que se ingresen solo numeros enteros`
    );
    console.assert(
        validarElInput("3") === "",
        `Validar Inputs no valido que se realizo un ingreso valido`
    );
}

probarValidarInputs();