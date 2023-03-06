const boton = document.getElementById("comprobar");
const patronNombre = /[a-záéíóúñ-]+( [a-záéíóúñ-]+)*/i;
const patronApellido = /^[a-záéíóúñ\-]+[ a-záéíóúñ\-]+$/i;
const patronTelefono = /^(\+|00)[0-9]{2,3}[0-9]{9}$/;
const patronDia = /^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
const patronEmail = /^(.+\@.+\..+)$/;
const patronBinario = /^[01]+/;
const patronHexadecimal = /^[0-9A-F]+$/;
const patronDecimales = /^-?[0-9],[0-9]{2}$/;

boton.addEventListener("click", (event) =>{
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const dia = document.getElementById("dia").value;
    const email = document.getElementById("email").value;
    const binario = document.getElementById("binario").value;
    const hexadecimal = document.getElementById("hexadecimal").value;
    const decimal = document.getElementById("decimales").value;

    const resultadoNombre = patronNombre.test(nombre);
    const resultadoApellido = patronApellido.test(apellido);
    const resultadoTelefono = patronTelefono.test(telefono);
    const resultadoDia = patronDia.test(dia);
    const resultadoEmail = patronEmail.test(email);
    const resultadoBinario = patronBinario.test(binario);
    const resultadoHexadecimal = patronHexadecimal.test(hexadecimal);
    const resultadoDecimal = patronDecimales.test(decimal);


    mostrarNombre.innerHTML = `El nombre es: ${resultadoNombre ? "correcto" : "incorrecto, sólo puede contener letras"}`;
    mostrarApellido.innerHTML = `Los apellidos son: ${resultadoApellido ? "correctos" : "incorrectos, sólo pueden contener letras"}`;
    mostrarTelefono.innerHTML = `El tefélono es: ${resultadoTelefono ? "correcto" : "incorrecto, tiene que tener el formato: + cod pais o 00 codigo de pais, seguido de 9 dígitos"}`;
    mostrarDia.innerHTML = `El día es ${resultadoDia ? "correcto" : "incorrecto, sólo se admiten días del 1 al 31"}`;
    mostrarEmail.innerHTML = `El email es ${resultadoEmail ? "correcto" : "incorrecto, tiene que seguir el siguiente formato: hola@ejemplo.com"}`;
    mostrarBinario.innerHTML = `El número binario es ${resultadoBinario ? "correcto" : "incorrecto, sólo puede tener 0 y 1"}`;
    mostrarHexadecimal.innerHTML = `El número hexadecimal es ${resultadoHexadecimal ? "correcto" : "incorrecto, no es un número hexadecimal"}`;
    mostrarDecimales.innerHTML = `El número decimal es ${resultadoDecimal ? "correcto" : "incorrecto, sólo puede tener dos decimales, separado por coma"}`;
});