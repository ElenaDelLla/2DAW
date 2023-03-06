const divErrores = document.getElementById("errores");
const botonEnviar = document.getElementById("enviar");
const botonUltimos = document.getElementById("ultimos");

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

function guardarCookies() {
  const valorCookieTeleFult = leerCookie("telefult");
  const valorCookieContrult = leerCookie("contrault");

  const valorInputTelefono = document.getElementById("telefono").value;
  const valorInputContra = document.getElementById("contras").value;

  if (valorCookieTeleFult && valorCookieContrult) {
    document.cookie = `telefpenult=${valorCookieTeleFult};path=/dir;`;

    document.cookie = `contrapenult=${valorCookieContrult};path=/dir`;
  }
  document.cookie = `telefult=${valorInputTelefono};path=/dir`;
  document.cookie = `contrault=${valorInputContra};path=/dir`;
}

function validarTelefono() {
  const inputTelefono = document.getElementById("telefono");
  const patron = /^(6|9)[0-9]{8}$/;
  const resultado = patron.test(inputTelefono.value);
  if (resultado) {
    return true;
  } else {
    errores.innerHTML += "El telefono no cumple el formato: Debe comenzar por 6 ó 9</br>";
    inputTelefono.focus();
    return false;
  }
}

function validarContrasenya() {
  const inputContra = document.getElementById("contras");
  const patron = /^[a-zA-Z0-9_]{8}$/;
  const resultado = patron.test(inputContra.value);
  if (resultado) {
    return true;
  } else {
    errores.innerHTML +=
      "La contraseña no cumple el formato: Debe contener al menos 8 caracteres (del alfabeto básico, numeros, guiones bajos) </br>";
    inputContra.focus();
    return false;
  }
}

botonEnviar.addEventListener("click", (event) => {
  divErrores.innerHTML = "";

  if (validarTelefono() && validarContrasenya()) {
    if (!confirm("¿Desea enviarlo?")) {
      event.preventDefault();
    } else {
      guardarCookies();
    }
  } else {
    event.preventDefault();
  }
});

botonUltimos.addEventListener("click", (event) => {
  event.preventDefault();
  const valorCookieTeleFult = leerCookie("telefult");
  const valorCookieContrult = leerCookie("contrault");
  const valorCookieTelefpenult = leerCookie("telefpenult");
  const valorCookieContrapenult = leerCookie("contrapenult");
  info.innerHTML = "";
  info.innerHTML += `El valor de la cookie telefult es ${valorCookieTeleFult} </br>`;
  info.innerHTML += `El valor de la cookie contrault es ${valorCookieContrult} </br> </br>`;

  info.innerHTML += `El valor de la cookie telefpenult es ${valorCookieTelefpenult} </br>`;
  info.innerHTML += `El valor de la cookie contrapenult es ${valorCookieContrapenult} </br>`;
});