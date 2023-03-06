let respuesta = document.getElementById("si");
let elementoDiv = document.getElementsByTagName("div")[0];

respuesta.addEventListener("click", eventoClick, false);
let tamanio = 10;
let pulsado = false;
function eventoClick(event) {
  event.preventDefault();
  elementoDiv.innerHTML = "No me lo creo";
  if (pulsado) {
    tamanio += 10;
    elementoDiv.style.fontSize = tamanio + "px";
  }
  pulsado = true;
}
