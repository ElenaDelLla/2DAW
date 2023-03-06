const body = document.getElementsByTagName("body")[0];

function tratarRespuesta(objJSON) {
  //const objJSON = JSON.parse(respuesta);
  const header = document.createElement("header");
  body.appendChild(header);
  const h1 = document.createElement("h1");
  const contenidoH1 = document.createTextNode(objJSON.squadName);
  h1.appendChild(contenidoH1);
  const parrafo = document.createElement("p");
  const contendoParrafo = document.createTextNode(
    `Hometown: ${objJSON.homeTown} // Formed: ${objJSON.formed}`
  );
  parrafo.appendChild(contendoParrafo);
  header.appendChild(h1);
  header.appendChild(parrafo);

  const section = document.createElement("section");
  body.appendChild(section);

  objJSON.members.forEach((heroe) => {
    const article = document.createElement("article");
    section.appendChild(article);
    const h2 = document.createElement("h2");
    const contenidoH2 = document.createTextNode(`${heroe.name}`);
    h2.appendChild(contenidoH2);
    article.appendChild(h2);
    const parrafo1 = document.createElement("p");
    const contenidoParrafo1 = document.createTextNode(
      `Secret identity: ${heroe.secretIdentity}`
    );
    parrafo1.appendChild(contenidoParrafo1);
    const parrafo2 = document.createElement("p");
    const contenidoParrafo2 = document.createTextNode(`Age: ${heroe.age}`);
    parrafo2.appendChild(contenidoParrafo2);
    const parrafo3 = document.createElement("p");
    const contenidoParrafo3 = document.createTextNode(`Superpowers`);
    parrafo3.appendChild(contenidoParrafo3);

    article.appendChild(parrafo1);
    article.appendChild(parrafo2);
    article.appendChild(parrafo3);

    const ul = document.createElement("ul");
    heroe.powers.forEach((power) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      const contenidoLi = document.createTextNode(`${power}`);
      li.appendChild(contenidoLi);
    });
    article.appendChild(ul);
  });
}

/*
const peticion = new XMLHttpRequest();
peticion.addEventListener("readystatechange", function () {
  if (peticion.readyState === 4 && peticion.status === 200) {
    tratarRespuesta(peticion.responseText);
  }
});
peticion.open("GET","https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",true);
peticion.send();*/

const url =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    tratarRespuesta(data);
  });
