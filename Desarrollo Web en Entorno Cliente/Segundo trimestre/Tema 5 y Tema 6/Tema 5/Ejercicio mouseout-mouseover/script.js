const tabla = document.getElementsByTagName("tbody")[0]; // buscamos la tabla
const botones = tabla.getElementsByTagName("button"); // seleccionamos todos los botones de dentro de la tabla



Array.from(botones).forEach((boton) => {
  // recorremos el array de botones y para cada boton realizamos:
  boton.addEventListener("mouseout", cambiarColor);
  boton.addEventListener("mouseover", cambiarColor);
});

function cambiarColor(event) {
  if (event.type === "mouseout") {
    if (event.relatedTarget.nodeName === "TD") {
      // si el relatedTarget es un elemento de tipo TD (importante mayusculas)
      event.relatedTarget.classList.value = ""; // se quita todas las clases que tuviera el elemento relatedTarget;
      event.relatedTarget.classList.add("azul"); // se le aplica la clase azul
    }
  } else if (event.type === "mouseover") {
    if (event.relatedTarget.nodeName === "TD") {
      // si el relatedTarget es un elemento de tipo TD (importante mayusculas)
      event.relatedTarget.classList.value = ""; // se quita todas las clases que tuviera el elemento relatedTarget;
      event.relatedTarget.classList.add("verde"); // se le aplica la clase verde
    }
  }
  document.getElementById(
    "mostrar"
  ).innerHTML = `Tipo de evento: ${event.type}<br> Id del elemento que dispara el evento: ${event.currentTarget.id} <br> Id del elemento relatedTarget: ${event.relatedTarget.id}`;
}
