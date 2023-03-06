const displayelementoAnterior = document.getElementById("valor-anterior");
const displayelementoActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const botonBorrar = document.getElementById("borrar");
const botonBorrarTodo = document.getElementById("borrarTodo");

const display = new Display(displayelementoAnterior, displayelementoActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => {
        display.aniadirNumero(boton.innerHTML);
    });
});

botonBorrar.addEventListener("click", () => {
    display.borrar();
});

botonBorrarTodo.addEventListener("click", () => {
    display.borrarTodo();
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => {
        display.computar(boton.value);
    });
});