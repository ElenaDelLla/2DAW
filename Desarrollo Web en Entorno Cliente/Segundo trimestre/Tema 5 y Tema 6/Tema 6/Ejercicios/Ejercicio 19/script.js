const boton = document.getElementById("validar");
const patron = /^.*(([0-9]+.*[A-ZÑ]+)|([A-ZÑ]+.*[0-9]+)).*$/;

boton.addEventListener("click", (event) => {
    event.preventDefault();

    const textoInput = document.getElementById("texto").value;
    const resultado = patron.test(textoInput);

    result.innerHTML = resultado ? "Correcto" : "Incorrecto, se debe incluir un número y una letra mayúcula";
});
