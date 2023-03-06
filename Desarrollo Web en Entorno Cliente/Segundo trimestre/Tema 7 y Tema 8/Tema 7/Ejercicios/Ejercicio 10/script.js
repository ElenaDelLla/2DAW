const boton = document.getElementById("boton");
const comunidadAutonoma = document.getElementById("comunidad_autonoma");
const provincia = document.getElementById("provincia");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellidos");

function borrarOpciones() {
  //Para borrar las opciones que habia antes 
  while (provincia.firstChild) {
    provincia.removeChild(provincia.firstChild);
  }
}

rellenaProvincias();

function cargarSelect(respuesta) {
  const objJSOn = JSON.parse(respuesta);
  //console.log(objJSOn);
  borrarOpciones();
  Array.from(objJSOn).forEach((element) => {
    const option = document.createElement("option");
    const texto = document.createTextNode(element);
    option.appendChild(texto);
    provincia.appendChild(option);
  });
}

function rellenaProvincias() {
  $.ajax({
    url: "ej10UT7.php",
    type: "GET",
    data: `comunidad_autonoma=${comunidadAutonoma.value}`,
    success: (respuesta) => {
      cargarSelect(respuesta);
    },
  });
}

comunidadAutonoma.addEventListener("change", () => {
  rellenaProvincias();
});

boton.addEventListener("click", (event) => {
  event.preventDefault();
  demo2.innerHTML = `Nombre: ${nombre.value}<br> Apellidos: ${apellido.value}<br> Comunidad Autónoma: ${comunidadAutonoma.value} <br> Provincia: ${provincia.value}`;
});
