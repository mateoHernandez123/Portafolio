/*Declaracion de variables necesarias para realizar las operaciones y mostrar en el display */
const displayValorAnterior = document.getElementById('valor-superior');
const displayValorActual = document.getElementById('valor-inferior');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const display = new Display(displayValorAnterior, displayValorActual);

/* Metodo que escucha el teclado y segun que letra presionas 
te lo toma de la misma manera para que puedas usarlo en la calculadora:*/

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    display.agregarNumero(key);
  } else if (key === '.') {
    display.agregarNumero(key);
  } else if (key === 'Backspace') {
    display.borrar();
  } else if (key === 'Delete') {
    display.borrarTodo();
  } else if (key === '+') {
    display.computar("sumar");
  } else if (key === '-') {
    display.computar("restar");
  } else if (key === '*') {
    display.computar("multiplicar");
  } else if (key === '/') {
    display.computar("dividir");
  } else if (key === 'Enter') {
    display.computar("igual");
  }
});
/*Metodos para cuando apretas los botones mandan a realizar la operacion correspondiente*/
botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.computar(boton.value))
})

