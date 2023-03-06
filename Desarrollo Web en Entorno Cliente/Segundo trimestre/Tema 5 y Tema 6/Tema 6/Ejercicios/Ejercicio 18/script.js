const boton = document.getElementById("validar");
const patron = /^.*[0-9]+.*$/;

boton.addEventListener("click", (event) => {
    event.preventDefault();

    const textoInput = document.getElementById("texto").value;
    const resultado = patron.test(textoInput);
    result.innerHTML = resultado ? "Correcto" : "Incorrecto, debe incluir un número";

});