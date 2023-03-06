const boton = document.getElementById("enviar");
document.cookie = "ruta=0;domain=localhost;path=/t"; // ;path=/t

boton.addEventListener("click", () => {
  /*const cookies = document.cookie;
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
    });*/
  let valor = obtenerCookie("ruta");
  guardarCookie("ruta", valor++, "/t");
});

function obtenerCookie(nombre) {
  const arrayCookies = document.cookie.split("; ");
  if (arrayCookies.length > 0) {
    arrayCookies.forEach((cookie) => {
      const partesCookie = cookie.split("=");
      if (partesCookie[0] === nombre) {
        return partesCookie[1]; // valor 
      }
    });
  }
  return null;
}

function guardarCookie(nombre, valor, diasCaducidad, ruta) {
  let expires = "";
  if (diasCaducidad) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  let path = "";
  if (ruta) {
    path = `; path=${ruta}`;
  }
  document.cookie = `${nombre}=${valor}${expires}${path}`;
}
