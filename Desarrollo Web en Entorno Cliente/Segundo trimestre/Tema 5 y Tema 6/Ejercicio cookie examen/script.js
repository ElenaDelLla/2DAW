const botonGuardar = document.getElementById("guardar");
const botonMostrarUltimo = document.getElementById("mostrarUltimo");
const botonMostrarPenultimo = document.getElementById("mostrarPenultimo");
const botonBorrar = document.getElementById("borrar");

function leerCookie(nombre) {
  const arrayCookies = document.cookie.split("; ");
  let valorCookie = null;
  if (arrayCookies.length > 0) {
    arrayCookies.forEach((cookie) => {
      const partesCookie = cookie.split("=");
      if (partesCookie[0] === nombre) {
        valorCookie = partesCookie[1];
      }
    });
  }
  return valorCookie;
}

function incrementarContador() {
  let valorActual = leerCookie("contador");
  if (valorActual === null) {
    valorActual = 1;
  } else {
    valorActual = parseInt(valorActual) + 1;
  }
  gu
  document.cookie = `contador=${valorActual};`;
  mostrar.innerHTML = valorActual;
}

botonGuardar.addEventListener("click", () => {
  const valorInput = document.getElementById("dato").value;
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + 5 * 60 * 1000); // 5 minutes
  const valorActual = leerCookie("ultimo");
  if (valorActual != null) {
    document.cookie = `penultimo=${valorActual};expires=${fecha.toUTCString()}`;
  }
  document.cookie = `ultimo=${valorInput};expires=${fecha.toUTCString()}`;
});

botonMostrarUltimo.addEventListener("click", () => {
  incrementarContador();
  const valorUltimo = leerCookie("ultimo");

  if (valorUltimo !== null) {
    resultado.innerHTML += `valorUltimo="${valorUltimo}" <br>`;
  } else {
    resultado.innerHTML += `El valor de la cookie ultimo está vacío <br>`;
  }
});

botonMostrarPenultimo.addEventListener("click", () => {
  incrementarContador();
  const valorPenultimo = leerCookie("penultimo");
  if (valorPenultimo !== null) {
    resultado.innerHTML += `valorPenultimo="${valorPenultimo}" <br>`;
  } else {
    resultado.innerHTML += `El valor de la cookie penultimo está vacío <br>`;
  }
});

botonBorrar.addEventListener("click", () => {
  const fecha = new Date();
  if (document.cookie !== null) {
    document.cookie = `ultimo="";expires=${fecha.toUTCString()}`;
    document.cookie = `penultimo="";expires=${fecha.toUTCString()}`;
    document.cookie = `contador="";expires=${fecha.toUTCString()}`;
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = `No existe ninguna cookie en este momento`;
  }
});
