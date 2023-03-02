function probarValidarInputs() {
    console.assert(
        validarElInput(".") === `Este campo solo puede tener numeros enteros`,
        `Validar Input no valido que se ingresen solo numeros enteros`
    );
    console.assert(
        validarElInput("3") === "",
        `Validar Inputs no valido que se realizo un ingreso valido`
    );
}

probarValidarInputs();