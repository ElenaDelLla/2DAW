let tabla = document.getElementsByTagName("tbody")[0];
function primero() {
  // pillamos el primer hijo de tabla (primer tr), de este sacamos el primer hijo (primer td) y de este sacamos el primer hijo (button que contiene dicho td)
  let primerBoton = tabla.firstElementChild.firstElementChild.firstElementChild;
  primerBoton.style.backgroundColor = "red";
}
function segundo() {
  // pillamos el primer hijo de tabla (primer tr), de este sacamos el primer hijo (primer td) y de este sacamos el siguiente hermano (segundo td) y de este sacamos el primer hijo (button que contiene dicho td)
  let segundo =
    tabla.firstElementChild.firstElementChild.nextElementSibling
      .firstElementChild;
  segundo.style.backgroundColor = "green";
}
function ultimo() {
  // pillamos el ultimo hijo de tabla (ultimo tr), de este sacamos el ultimo hijo (ultimo td) y de este sacamos el primer hijo (button que contiene dicho td)
  let ultimo = tabla.lastElementChild.lastElementChild.lastElementChild;
  ultimo.style.backgroundColor = "blue";
}
function penultimo() {
  // pillamos el ultimo hijo de tabla (ultimo tr), de este sacamos el ultimo hijo (ultimo td) y de este sacamos el hermano anterior (penultimo td) y de este sacamos el primer hijo (button que contiene dicho td)
  let ultimo =
    tabla.lastElementChild.lastElementChild.previousElementSibling
      .firstElementChild;
  ultimo.style.backgroundColor = "grey";
}

function subir() {
  const borrado = tabla.removeChild(tabla.firstElementChild);
  tabla.appendChild(borrado);
}

function bajar() {
  const borrado = tabla.removeChild(tabla.lastElementChild);
  tabla.insertBefore(borrado, tabla.firstElementChild);
}
function izquierda() {
  /*const fila1 = tabla.firstElementChild;
  const fila2 = tabla.firstElementChild.nextElementSibling;
  const fila3 = tabla.lastElementChild;

  const borrado1 = fila1.removeChild(fila1.firstElementChild);
  fila3.appendChild(borrado1);
  const borrado2 = fila2.removeChild(fila2.firstElementChild);
  fila1.appendChild(borrado2);
  const borrado3 = fila3.removeChild(fila3.firstElementChild);
  fila2.appendChild(borrado3);*/

  let tabla = document.getElementsByTagName("tbody")[0];
  let nodoPadre = null;
  let nodoMover = null;

  for (let i = 0; i < tabla.childElementCount; i++) {
    actual = i;
    siguiente = i + 1;
    if(actual == tabla.childElementCount - 1){
      siguiente = 0;
    }
    nodoPadre = tabla.children[actual];
    nodoMover = tabla.children[siguiente].firstElementChild;
    nodoPadre.appendChild(nodoMover);
  }
}

function derecha() {
  /*const fila1 = tabla.firstElementChild;
  const fila2 = tabla.firstElementChild.nextElementSibling;
  const fila3 = tabla.lastElementChild;

  const borrado1 = fila1.removeChild(fila1.lastElementChild);
  fila2.insertBefore(borrado1, fila2.firstElementChild);
  const borrado2 = fila2.removeChild(fila2.lastElementChild);
  fila3.insertBefore(borrado2, fila3.firstElementChild);
  const borrado3 = fila3.removeChild(fila3.lastElementChild);
  fila1.insertBefore(borrado3, fila1.firstElementChild);*/


  let tabla = document.getElementsByTagName("tbody")[0];
  let nodoPadre = null;
  let nodoMover = null;
  let nodoRef = null;

  for (let i = 0; i < tabla.childElementCount; i++) {
    actual = i;
    siguiente = i + 1;
    if(actual == tabla.childElementCount - 1){
      siguiente = 0;
    }
    nodoPadre = tabla.children[siguiente];
    nodoMover = tabla.children[actual].lastElementChild;
    nodoRef = nodoPadre.firstElementChild;
    nodoPadre.insertBefore(nodoMover,nodoRef);
  }

}
function generaId(numElementos) {
  return Math.floor(Math.random() * numElementos); // Devuelve un numero Random entre 0 y numElementos-1
}
function aleatorio() {
  const elementos = document.getElementsByTagName("td"); // Obtenemos todos los "td" que hay
  const numElementos = elementos.length; // Miramos cuantos td hay
  for (let index = 0; index < numElementos; index++) {
    // ejecutamos tantos movimientos como tds hay
    let idElementoOrigen = generaId(numElementos);
    let idElementoDestino = generaId(numElementos);
    while (idElementoOrigen === idElementoDestino) {
      // Si genera el mismo origen y destino, genero id destino hasta que sean diferentes
      idElementoDestino = generaId(numElementos);
    }
    const elementoOrigen = elementos[idElementoOrigen]; // Obtenemos el elemento origen a sustituir
    const copiaElementoOrigen = elementos[idElementoOrigen].cloneNode(true); // Clonamos el elemento origen a mover (al hacer replace el sustituido se pierde)
    const elementoDestino = elementos[idElementoDestino]; // Obtenemos el elemento destino a sustituir
    elementoDestino.parentElement.insertBefore(copiaElementoOrigen,elementoDestino); // Insertamos la copia del origen antes del elemento destino
    elementoOrigen.parentElement.replaceChild(elementoDestino, elementoOrigen); // Sustituimos el elemento origen con el elemento destino 
                                                                                //(replaceChild elimina el elemento de donde se encontraba y 
                                                                                //machaca el que está en la posicion donde se pone)
  }
}