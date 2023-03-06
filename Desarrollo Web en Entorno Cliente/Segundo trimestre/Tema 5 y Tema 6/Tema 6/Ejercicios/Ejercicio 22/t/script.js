const boton = document.getElementById("enviar");
document.cookie = "ruta=0;domain=localhost;path=/t"; // ;path=/t

boton.addEventListener("click", () => {
    const cookies = document.cookie;
    const arrayCookies = cookies.split("; ");
    arrayCookies.forEach(cookie => {
        const nombreValor = cookie.split("=");
        const nombre = nombreValor[0];
        let valor = nombreValor[1];
        if(nombre==="ruta"){
            valor++;
            document.cookie = `ruta=${valor};domain=localhost;path=/t`;// path=/t
            mostrar.innerHTML = document.cookie;
        }
    });
});