function probarValidarElInputTexto() {
    console.assert(
        probarValidarElInputTexto("-,1232140") === `Este campo solo puede tener Letras`,
        `Validar Nombre no valido que no solo se ingresen letras`
    )
    console.assert(
        validarElInputElInputTexto('') === `Este campo no puede estar vacio`,
        'Validar nombre no validó que el nombre no sea vacío',
    );
    console.assert(
        validarElInputElInputTexto("Fabrizio") === "",
        `Validar Nombre no valido que se realize un ingreso valido`
    )
}
function probarValidarElInputNumero() {
    console.assert(
        validarElInputNumero("-,.e") === `Este campo solo puede tener numeros enteros`,
        `Validar Numero no valido que no se ingrese un numero que no sea entero`
    )
    console.assert(
        validarElInputElInpuNumero('') === `Este campo no puede estar vacio`,
        'Validar Numero no validó que el nombre no sea vacío',
    );
    console.assert(
        validarElInputNumero("214124") === "",
        `Validar Numero no valido que se realize un ingreso valido`
    )
}