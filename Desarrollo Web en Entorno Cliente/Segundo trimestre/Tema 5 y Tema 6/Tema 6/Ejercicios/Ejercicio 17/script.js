const boton = document.getElementById("validar");
const patron = /^[a-zA-Z\S]{1,8}$/;

boton.addEventListener("click", (event) => {
    event.preventDefault();
    const textoInput = document.getElementById("texto").value;
    const resultado = patron.test(textoInput);

    if (resultado) {
        result.innerHTML = "Correcto"
    }else{
        result.innerHTML = "El texto no puede contener mas de 8 caracteres, ni espacios, tabuladores..."
    }
});