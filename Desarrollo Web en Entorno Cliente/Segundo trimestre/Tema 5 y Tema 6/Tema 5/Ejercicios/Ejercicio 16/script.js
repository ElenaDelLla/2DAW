let enlace = document.getElementsByTagName("a")[0];

//enlace.addEventListener("click", informar_fn, false);

function informar_fn(){
    alert(`Se va a abrir este enlace: ${this.href}`);
}

//Con funcion flecha

enlace.addEventListener("click", () => {
    alert(`Se va a abrir este enlace: ${enlace.href}`);
});