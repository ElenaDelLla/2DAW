const inputNumUsuarios = document.getElementById("numUsuarios");
const botonMostrar = document.getElementById("mostrar");
const body = document.getElementsByTagName("body")[0];

function mostrarXML(objXML) {
  const resultados = objXML.getElementsByTagName("results");
  const arrayResultados = Array.from(resultados);
  const divResultado = document.createElement("div");

  for (let index = 0; index < arrayResultados.length - 1; index++) {
    // Se obvia el ultimo objeto results
    const element = arrayResultados[index];
    const titulo = element.getElementsByTagName("title")[0].textContent;
    const nombre = element.getElementsByTagName("first")[0].textContent;
    const apellido = element.getElementsByTagName("last")[0].textContent;
    let genero = element.getElementsByTagName("gender")[0].textContent;
    const calle = element.getElementsByTagName("street")[0];
    const nombreCalle = calle.getElementsByTagName("name")[0].textContent;
    const numCalle = calle.getElementsByTagName("number")[0].textContent;
    const ciudad = element.getElementsByTagName("city")[0].textContent;
    const pais = element.getElementsByTagName("country")[0].textContent;

    if (genero === "female") {
      genero = "Mujer";
    } else if (genero === "male") {
      genero = "Hombre";
    }

    divResultado.innerHTML += `${titulo} ${nombre}  ${apellido}<br>`;
    divResultado.innerHTML += `Genero: ${genero} <br>`;
    divResultado.innerHTML += `Domicilio: ${nombreCalle} ${numCalle} (${ciudad}, ${pais})<br> <br>`;
  }
  body.appendChild(divResultado);
}

botonMostrar.addEventListener("click", () => {
  const url = `https://randomuser.me/api/?results=${inputNumUsuarios.value}&format=XML`;
  fetch(url)
    .then((response) => response.text())
    .then((stringXML) => {
      const parser = new DOMParser();
      const objXML = parser.parseFromString(stringXML, "text/xml");
      return objXML;
    })
    .then((objXML) => {
      mostrarXML(objXML);
    });
});
