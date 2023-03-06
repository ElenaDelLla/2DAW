const boton = document.getElementById("enviar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellidos");
const patronEdad = /^([0-9]?[0-9]|10[0-5])$/;
const patronMatricula = /^[0-9]{4} ?[A-Z]{3}$/;

// Funciones para validar los campos. Si hay error se añade la clase error y se pone el foco:
function validarNombre() {
  if (nombre.value !== "") {
    nombre.className = "";
    return true;
  } else {
    errores.innerHTML = `El nombre no puede estar vacío`;
    nombre.className = "error";
    nombre.focus();
    return false;
  }
}

function validarApellido() {
  if (apellido.value !== "") {
    apellido.className = "";
    return true;
  } else {
    errores.innerHTML = `El apellido no puede estar vacío`;
    apellido.className = "error";
    apellido.focus();
    return false;
  }
}

function validarEdad() {
  const edad = document.getElementById("edad");
  if (edad.value === "") {
    errores.innerHTML = `La edad no puede estar vacía`;
    edad.className = "error";
    edad.focus();
    return false;
  }
  const resultadoEdad = patronEdad.test(edad.value);
  if (resultadoEdad) {
    edad.className = "";
    return true;
  } else {
    errores.innerHTML = `La edad es incorrecta, introduce un valor entre 0 y 105`;
    edad.className = "error";
    edad.focus();
    return false;
  }
}
function validarMatricula() {
  const matricula = document.getElementById("matricula");
  if (matricula.value === "") {
    errores.innerHTML = `La matrícula no puede estar vacía`;
    matricula.className = "error";
    matricula.focus();
    return false;
  } else {
    const resultadoMatricula = patronMatricula.test(matricula.value);
    if (resultadoMatricula) {
      matricula.className = "";
      return true;
    } else {
      errores.innerHTML = `La matricula es incorrecta, debe seguir el formato: 4 Números 1 espacio en blanco (opcional) y 3 letras de la A-Z en mayúsculas`;
      matricula.className = "error";
      matricula.focus();
      return false;
    }
  }
}
function validarSelect() {
  const select = document.getElementById("provincia");
  if (select.value !== "0") {
    select.className = "";
    return true;
  } else {
    select.className = "error";
    select.focus();
    errores.innerHTML = `Tienes que seleccionar una opción`;
    return false;
  }
}
// Cambiamos el texto del campo nombre y apellidos a mayúsculas una vez que éste ha perdido el foco
nombre.addEventListener("blur", () => {
  nombre.value = nombre.value.toUpperCase();
});

apellido.addEventListener("blur", () => {
  apellido.value = apellido.value.toUpperCase();
});

boton.addEventListener("click", (event) => {
  // Comprobamos que las validaciones son correctas
  if (
    validarNombre() &&
    validarApellido() &&
    validarEdad() &&
    validarMatricula() &&
    validarSelect()
  ) {
    // Si son correctas, preguntamos si se quiere enviar el formulario, si se cancela, eliminamos la 
    //acción por defecto, y si se acepta vamos a la página principal de Google, que es la que 
    //aparece en el accion del formulario
    if (!confirm("¿Quieres enviar el formulario?")) {
      event.preventDefault();
    }
    // Si algunas de las validaciones, no es correcta se anula la acción por defecto
  } else {
    event.preventDefault();
  }
  //Guardamos todas la cookies de la página en un array
  const arrayCookie = document.cookie.split("; ");
  let numIntentos = 1;
  //Creo una fecha con la fecha actual
  const d = new Date();
  //Modificamos la fecha para sumar 2 días en milisegundos
  d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
  //Montamos la cadena para la expiración de la cookie
  let expires = "expires=" + d.toUTCString();

  arrayCookie.forEach((cookie) => {
    //Separamos las partes de todas las cookies que contiene el array anterior
    const partesCookie = cookie.split("=");
    const nombreCookie = partesCookie[0];
    let valorCookie = partesCookie[1];
    //Si el nombre de la cookie es contador...
    if (nombreCookie === "contador") {
      //Transformamos el valor de la cookie a entero para poder sumar el contador
      numIntentos=parseInt(valorCookie)+1;
    }
  });
  //Guardamos la cookie
  document.cookie = `contador=${numIntentos};${expires}`;
  //Imprimimos en la pantalla
  intentos.innerHTML = `Intentos: ${numIntentos}`;
});

