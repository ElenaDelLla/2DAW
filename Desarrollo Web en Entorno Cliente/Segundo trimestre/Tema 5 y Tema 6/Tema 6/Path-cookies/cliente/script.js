const botonGuardar = document.getElementById("guardar");
const botonConsultar = document.getElementById("consultar");

botonGuardar.addEventListener("click", () => {
    const valorInput = document.getElementById("ciudad").value;
    const inputProvincia = document.getElementById("provincia").value;
    document.cookie = `provincia=${inputProvincia};path=/cliente;`;
    
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + 1 * 60 * 1000);
    let expires = "expires=" + fecha.toUTCString();

    document.cookie = `ciudad=${valorInput};${expires};`
});

botonConsultar.addEventListener("click", () => {

    const arrayCookies = document.cookie.split("; ");
    let valorCookieProvincia;
    let valorCookieCiudad;
    arrayCookies.forEach(cookie => {
        const partesCookies = cookie.split("=");
        if (partesCookies[0] === "provincia") {
            valorCookieProvincia=partesCookies[1];
        } 
        if (partesCookies[0] === "ciudad") {
            valorCookieCiudad=partesCookies[1];
        }
    });

    mostrar.innerHTML = `Cookie provincia: ${valorCookieProvincia} <br> Cookie ciudad: ${valorCookieCiudad}`;
});