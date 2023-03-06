const body = document.getElementsByTagName("body")[0];
const botonCrear = document.getElementById("crearTabla");
const botonAniadirDatos = document.getElementById("aniadirDatos");
const botonBorrar = document.getElementById("borrarDatos");

botonCrear.addEventListener("click", crearTabla);

function pintar() {
  const tabla = document.getElementsByTagName("table")[0];
  if (tabla) {
    const hijosTabla = tabla.childNodes;
    let alterno = true;
    hijosTabla.forEach((hijo) => {
      if (hijo.nodeName === "TR") {
        if(alterno){
          hijo.classList.add("grey");
          hijo.classList.remove("white");
        } else{
          hijo.classList.add("white");
          hijo.classList.remove("grey");
        }
        alterno=!alterno;
      }
    });
  }
}

function crearTabla() {
  errores.innerHTML = "";
  const tabla = document.createElement("table");
  const th1 = document.createElement("th");
  th1.style.border = "1px solid black";
  const textoNombre = document.createTextNode("Nombre");
  th1.appendChild(textoNombre);
  const th2 = document.createElement("th");
  th2.style.border = "1px solid black";
  const textoTelefono = document.createTextNode("Telefono");
  th2.appendChild(textoTelefono);
  tabla.appendChild(th1);
  tabla.appendChild(th2);
  body.appendChild(tabla);
  tabla.addEventListener("mouseover", pintar);
}

botonAniadirDatos.addEventListener("click", () => {
  const nombreTabla = document.getElementById("nombre").value;
  const nombreTelefono = document.getElementById("telefono").value;
  const tabla = document.getElementsByTagName("table")[0];
  if (tabla) {
    if (nombreTabla !== "" && nombreTelefono !== "") {
      errores.innerHTML = "";
      const tdNombre = document.createElement("td");
      tdNombre.style.border = "1px solid black";
      const tdTelefono = document.createElement("td");
      tdTelefono.style.border = "1px solid black";
      const textoCelda = document.createTextNode(nombreTabla);
      const textoCeldaTelefono = document.createTextNode(nombreTelefono);
      tdNombre.appendChild(textoCelda);
      tdTelefono.appendChild(textoCeldaTelefono);
      const fila = document.createElement("tr");
      fila.appendChild(tdNombre);
      fila.appendChild(tdTelefono);

      const primeraFilaExistente = tabla.querySelector("tr");
      if (primeraFilaExistente) {
        tabla.insertBefore(fila, primeraFilaExistente);
      } else {
        tabla.appendChild(fila);
      }
    } else {
      errores.innerHTML = `Los campos nombre y teléfono están vacíos`;
    }
  } else {
    errores.innerHTML = `Primero debes crear la tabla`;
  }
});

botonBorrar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const tabla = document.getElementsByTagName("table")[0];
  if (tabla) {
    const hijosTabla = tabla.childNodes;
    let hayFilas = false;
    hijosTabla.forEach((hijo) => {
      if (hijo.nodeName === "TR") {
        hayFilas = true;
        if (hijo.firstElementChild.innerHTML === nombre) {
          tabla.removeChild(hijo);
          pintar();
        }
      }
    });
    if (!hayFilas) {
      errores.innerHTML = `Para borrar la tabla debe tener algun dato`;
    }
  } else {
    errores.innerHTML = `Para borrar primero debes crear la tabla`;
  }
});