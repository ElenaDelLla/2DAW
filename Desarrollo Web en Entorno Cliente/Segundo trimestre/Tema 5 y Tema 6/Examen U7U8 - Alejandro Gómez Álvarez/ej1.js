document.getElementById("enviar").addEventListener("click", comprobar);
document.getElementById("limpiar").addEventListener("click", limpiar);
document.getElementById("ver").addEventListener("click", ver);
let oculto = true;

function comprobar(event) {
  if (
    validarNombreYApellido() &&
    validarDni() &&
    validarTelefono() &&
    validarContrasenia() &&
    confirmarContrasenia() &&
    confirm("Enviar formulario??")
  ) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

function limpiar() {
  document.getElementById("formulario").reset();
}

function ver() {
  if (oculto) {
    document.getElementById("contras").setAttribute("type", "text"); //se cambia el tipo de password a text
    document.getElementById("contras2").setAttribute("type", "text"); //se cambia el tipo de password a text

    document.getElementById("ver").setAttribute("value", "Ocultar"); //se cambia el valor del boton de ver a ocultar
    oculto=false;
  } else {
    document.getElementById("contras").setAttribute("type", "password"); //se cambia el tipo de text a password
    document.getElementById("contras2").setAttribute("type", "password"); //se cambia el tipo de text a password

    document.getElementById("ver").setAttribute("value", "Ver"); //se cambia el valor del boton de ocultar a ver
    oculto=true;
  }
}

function validarNombreYApellido() {
  var nomapellido = document.getElementById("nombre").value;
  if (nomapellido != "") {
    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      "Nombre y apellidos incorrectos" + "<br>";
    document.getElementById("nombre").focus();
    return false;
  }
}

function validarDni() {
  var regeDni = /^\d{8}-?[A-Z]{1}$/; //Patron en el que selecciono 8 numeros con \d{8} y a continuacion un gión opcional junto a una letra mayúscula, a continuación hago el módulo entre 23 para ver que letra corresponde
  var letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  var numeroDNI;
  var modulo;
  var letrasDni;

  numeroDNI = parseInt(nif.value.substr(0, 8));
  modulo = numeroDNI % 23;
  letrasDni = nif.value.substr(nif.value.length - 1);

  if (regeDni.test(nif.value) && letrasDni == letras[modulo]) {
    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      "DNI ES INCORRECTO" + "<br>";
    document.getElementById("nif").focus();
    return false;
  }
}

function validarTelefono() {
  var telf = document.getElementById("telefono").value;
  var regeTelefono = /^(6|9)\d{8}$/; //patron que empieza por 6 o  por 9, ya que utilizo |, seguido de 8 dígitos mas expresados con \d{8}
  if (regeTelefono.test(telf)) {
    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      "Telefono incorrecto" + "<br>";
    document.getElementById("telefono").focus();
    return false;
  }
}

function validarContrasenia() {
  var contrasenia = document.getElementById("contras").value;
  var regeContrasenia = /^[a-z]{7}\d{1}$/; //patron con una longitud de 8, en la que 7 son letras y 1 único digito númerico como se pide, se usa el \d para el dígito númerico
  if (regeContrasenia.test(contrasenia)) {
    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      "Contraseña incorrecta" + "<br>";
    document.getElementById("contras").focus();
    return false;
  }
}

function confirmarContrasenia() {
  var contrasenia = document.getElementById("contras").value;
  var confirmacion = document.getElementById("contras2").value;
  if (contrasenia == confirmacion) {
    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      "Confirmacion incorrecta" + "<br>";
    document.getElementById("contras2").focus();
    return false;
  }
}
