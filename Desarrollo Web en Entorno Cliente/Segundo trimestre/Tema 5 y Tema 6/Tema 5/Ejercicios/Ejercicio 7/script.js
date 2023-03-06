let parrafoHTML = document.getElementById("demo");
let boton = document.getElementById("crear");
let botonReemplazar = document.getElementById("reemplazar");
let botonEliminar = document.getElementById("eliminar");

boton.addEventListener("click", crearParrafo_fn, false);
botonReemplazar.addEventListener("click", reemplazarElemento_fn, false);
botonEliminar.addEventListener("click", eliminarElemento_fn, false);

function crearParrafo_fn() {
  let parrafo = document.createElement("p");
  let b = document.createElement("b");
  let br = document.createElement("br");
  parrafo.setAttribute("title", "Parrafo creado desde JavaScript");

  let texto1 = document.createTextNode("Con JavaScript se ");
  let texto2 = document.createTextNode("pueden realizar ");
  let texto3 = document.createTextNode("un montón ");
  let texto4 = document.createTextNode("de cosas sobre el documento.");

  b.appendChild(texto2);
  b.appendChild(br);
  b.appendChild(texto3);

  parrafo.appendChild(texto1);
  parrafo.appendChild(b);
  parrafo.appendChild(texto4);

  parrafoHTML.appendChild(parrafo);
}
let parent;
function reemplazarElemento_fn() {
  let b = document.createElement("b");
  let texto = document.createTextNode("Retorno de carro");

  b.appendChild(texto);
  const elementoBr = document.getElementsByTagName("br")[0];
  parent = elementoBr.parentNode;
  parent.replaceChild(b, elementoBr);
}

function eliminarElemento_fn() {
  const padre = document.getElementsByTagName("b")[0];
  const hijos = padre.childNodes;
  let elementoB;
  hijos.forEach((element) => {
    if (element.nodeName === "B") {
      elementoB = element;
    }
  });
  padre.removeChild(elementoB);
}
