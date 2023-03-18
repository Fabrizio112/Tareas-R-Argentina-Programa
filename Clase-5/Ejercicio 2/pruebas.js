function validarElInput(a) {
    if (!/[1-9]/.test(a)) {
        return `Se debe ingresar un numero entero`
    } if (a.length === 0) {
        return `No se puede enviar vacio el campo`
    }
    return "";
}