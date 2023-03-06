const boton = document.getElementById("enviar");
const input = document.getElementById("input");
const password = document.getElementById("password");
const datalist = document.getElementById("lista");

let contador = 0;

function leerCookie(nombre) {
  const arrayCookies = document.cookie.split("; ");
  let valorCookie = null;
  if (arrayCookies.length > 0) {
    arrayCookies.forEach((cookie) => {
      const partes = cookie.split("=");
      if (partes[0] === nombre) {
        valorCookie = partes[1];
      }
    });
  }
  return valorCookie;
}

function rellenaDatalist(contador) {
  if (contador > 0) {
    datalist.innerHTML = "";
    for (let numeroCookie = 1; numeroCookie <= contador; numeroCookie++) {
      const option = document.createElement("option");
      option.setAttribute("value", leerCookie(`usuario${numeroCookie}`));
      datalist.appendChild(option);
    }
  }
}

boton.addEventListener("click", (event) => {
  const valorInput = input.value;
  const valorPassword = password.value;
  if (contador < 4) {
    document.cookie = `usuario${contador + 1}=${valorInput}`;
    document.cookie = `clave${contador + 1}=${valorPassword}`;
    contador++;
  } else {
    const valorCookie2 = leerCookie("usuario2");
    const valorCookie3 = leerCookie("usuario3");
    const valorCookie4 = leerCookie("usuario4");

    document.cookie = `usuario4=${valorInput}`;
    document.cookie = `usuario3=${valorCookie4}`;
    document.cookie = `usuario2=${valorCookie3}`;
    document.cookie = `usuario1=${valorCookie2}`;
    const valorClave2 = leerCookie("clave2");
    const valorClave3 = leerCookie("clave3");
    const valorClave4 = leerCookie("clave4");

    document.cookie = `clave4=${valorPassword}`;
    document.cookie = `clave3=${valorClave4}`;
    document.cookie = `clave2=${valorClave3}`;
    document.cookie = `clave1=${valorClave2}`;
  }

  rellenaDatalist(contador);
  input.value = "";
  password.value = "";
  event.preventDefault();
});

input.addEventListener("change", (event) => {
  const valorInput = input.value;
  const valorCookie1 = leerCookie("usuario1");
  if (valorCookie1 === valorInput) {
    password.value = leerCookie("clave1");
  }
  const valorCookie2 = leerCookie("usuario2");
  if (valorCookie2 === valorInput) {
    password.value = leerCookie("clave2");
  }
  const valorCookie3 = leerCookie("usuario3");
  if (valorCookie3 === valorInput) {
    password.value = leerCookie("clave3");
  }
  const valorCookie4 = leerCookie("usuario4");
  if (valorCookie4 === valorInput) {
    password.value = leerCookie("clave4");
  }
});
