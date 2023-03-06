let inputs = document.getElementsByTagName("input");

Array.from(inputs).forEach((input) => {
  input.addEventListener("keypress", pulsarBoton, false);
});

function pulsarBoton(event) {
  let elemSiguiente;
  if (event.key === "Enter") {
    elemSiguiente = this.nextElementSibling;
  
  if (!elemSiguiente) {
      elemSiguiente = inputs[0];
    }
    elemSiguiente.focus();
  }
}
