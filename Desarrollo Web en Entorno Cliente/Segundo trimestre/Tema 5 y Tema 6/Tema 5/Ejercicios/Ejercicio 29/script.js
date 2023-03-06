let inputs = document.getElementsByTagName("input");

Array.from(inputs).forEach((input) => {
  input.addEventListener("keypress", funcionPulsarBoton);
});

function funcionPulsarBoton(event) {
  if (event.key === "Enter") {
    let nextElement = this.nextSibling; //Con funciones flecha hay que hacerlo asi: event.currentTarget.nextSibling

    while ( nextElement.nodeName !== "INPUT" && nextElement.nodeName !== "BUTTON" ) {
      nextElement = nextElement.nextSibling;
      if (!nextElement) {
        nextElement = inputs[0];
      }
    }
    nextElement.focus();
  }
}
