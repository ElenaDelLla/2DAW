const boton = document.getElementById("boton");
const enlace = document.getElementById("enlace");

function esCancelable(event) {
  mostrar.innerHTML += `${this.id} ${event.cancelable} <br>`;
  if (this.id === "enlace" || this.id === "boton") {
    event.preventDefault();
  }
}
window.addEventListener("load", esCancelable);
boton.addEventListener("click", esCancelable);
enlace.addEventListener("click", esCancelable);

