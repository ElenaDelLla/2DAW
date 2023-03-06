const boton = document.getElementById("enviar");
const botonLimpiar = document.getElementById("limpiar");

const respuesta = confirm("¿Quieres utilizar cookies?");
if (respuesta) {
  document.cookie = "ruta=0;domain=localhost;path=/t"; // ;path=/t
  let date = new Date();
  date.setTime(date.getTime() + 60 * 1000);
  document.cookie = `caduca=0;expires=${date.toUTCString()}`;

  boton.addEventListener("click", () => {
    const cookies = document.cookie;
    const arrayCookies = cookies.split("; ");
    arrayCookies.forEach((cookie) => {
      const nombreValor = cookie.split("=");
      const nombre = nombreValor[0];
      let valor = nombreValor[1];
      if (nombre === "ruta") {
        valor++;
        document.cookie = `ruta=${valor};domain=localhost;path=/t`; // path=/t
        mostrar.innerHTML = document.cookie;
      }
    });
  });

  botonLimpiar.addEventListener("click", () => {
    const cookies = document.cookie;
    const arrayCookies = cookies.split("; ");
    arrayCookies.forEach((cookie) => {
      const nombreValor = cookie.split("=");
      const nombre = nombreValor[0];
      let valor = nombreValor[1];
      if (nombre === "caduca") {
        valor++;
        document.cookie = `caduca=${valor};expires=${date.toUTCString()}`;
        mostrar.innerHTML = document.cookie;
      }
    });
  });
} else {
  mostrar.innerHTML = "Adios";
}
