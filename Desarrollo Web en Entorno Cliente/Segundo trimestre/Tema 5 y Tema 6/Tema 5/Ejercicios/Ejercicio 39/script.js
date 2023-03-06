let inputs = document.getElementsByTagName("input");

Array.from(inputs).forEach((input) => {
  input.addEventListener("keypress", pulsarBoton, false);
});

function pulsarBoton(event) {
  let elemAnterior;
  if (event.key === "Enter") {
    elemAnterior = this.previousElementSibling;

    if (elemAnterior.nodeName === "LABEL") { //Al ir hacia atrás se queda en el input, y si no se salta el LABEL no funciona
      elemAnterior = elemAnterior.previousElementSibling;
    }
    if (!elemAnterior) {
      elemAnterior = document.getElementById("enviar");
    }
    elemAnterior.focus();
  }
}
