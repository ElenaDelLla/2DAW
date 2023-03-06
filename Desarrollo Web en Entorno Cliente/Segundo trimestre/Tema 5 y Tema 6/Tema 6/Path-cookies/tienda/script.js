const arrayCookies = document.cookie.split("; ");
let valorCookieProvincia;
let valorCookieCiudad;
arrayCookies.forEach(cookie => {
    const partesCookies = cookie.split("=");
    if (partesCookies[0] === "provincia") {
        valorCookieProvincia=partesCookies[1];
    } 
});

mostrar.innerHTML = `Cookie provincia: ${valorCookieProvincia}`;
