"use strict";

var tabla = document.getElementsByTagName("tbody")[0];

function primero() {
  // pillamos el primer hijo de tabla (primer tr), de este sacamos el primer hijo (primer td) y de este sacamos el primer hijo (button que contiene dicho td)
  var primerBoton = tabla.firstElementChild.firstElementChild.firstElementChild;
  primerBoton.style.backgroundColor = "red";
}

function segundo() {
  // pillamos el primer hijo de tabla (primer tr), de este sacamos el primer hijo (primer td) y de este sacamos el siguiente hermano (segundo td) y de este sacamos el primer hijo (button que contiene dicho td)
  var segundo = tabla.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
  segundo.style.backgroundColor = "green";
}

function ultimo() {
  // pillamos el ultimo hijo de tabla (ultimo tr), de este sacamos el ultimo hijo (ultimo td) y de este sacamos el primer hijo (button que contiene dicho td)
  var ultimo = tabla.lastElementChild.lastElementChild.lastElementChild;
  ultimo.style.backgroundColor = "blue";
}

function penultimo() {
  // pillamos el ultimo hijo de tabla (ultimo tr), de este sacamos el ultimo hijo (ultimo td) y de este sacamos el hermano anterior (penultimo td) y de este sacamos el primer hijo (button que contiene dicho td)
  var ultimo = tabla.lastElementChild.lastElementChild.previousElementSibling.firstElementChild;
  ultimo.style.backgroundColor = "grey";
}