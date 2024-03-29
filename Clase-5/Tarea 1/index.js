/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.;

*/
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $botonCalcular = document.querySelector("#calcular");
$botonCalcular.onclick = function () {
  let exito = manejarError(Number(document.querySelector("#salario-user").value))
  if (exito === 1) {
  } else {
    let salarioAnualDelUsuario = Number(document.querySelector("#salario-user").value);
    let salarioMensualDelUsuario = salarioAnualDelUsuario / 12;
    document.querySelector("#salario-mensual").value = salarioMensualDelUsuario;
  }
  return false;
}



