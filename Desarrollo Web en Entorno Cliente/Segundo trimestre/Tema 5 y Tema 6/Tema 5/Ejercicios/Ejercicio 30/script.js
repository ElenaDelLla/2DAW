let inputs = document.getElementsByTagName("input");

Array.from(inputs).forEach((input) => {
  input.addEventListener("keypress", funcionPulsarBoton, false);
});

function funcionPulsarBoton(event) {
  let elemAnterior;
  if (event.key === "Enter") {
    elemAnterior = this.previousSibling;
  }
  while (
    elemAnterior.nodeName !== "INPUT" && elemAnterior.nodeName !== "BUTTON") {
    elemAnterior = elemAnterior.previousSibling;

    if (!elemAnterior) {
      elemAnterior = document.getElementById("enviar");
    }
  }
  elemAnterior.focus();
}
