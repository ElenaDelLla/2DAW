const body = document.getElementsByTagName("body")[0];

function procesarJSON(data) {
  const tabla = document.createElement("table");
  const th1 = document.createElement("th");
  const contenidoTh1 = document.createTextNode("Nombre");
  th1.appendChild(contenidoTh1);
  const th2 = document.createElement("th");
  const contenidoTh2 = document.createTextNode("Orden");
  th2.appendChild(contenidoTh2);
  tabla.appendChild(th1);
  tabla.appendChild(th2);

  data.results.forEach((element) => {
    fetch(element.url)
      .then((response) => response.json())
      .then((data2) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.style.border="1px solid black";
        td.innerHTML = element.name;
        const td2 = document.createElement("td");
        td2.style.border="1px solid black";
        td2.innerHTML = data2.order;
        tr.appendChild(td);
        tr.appendChild(td2);
        tabla.appendChild(tr);
      })
      .catch((respuesta) => {
        demo.innerHTML += "En el catch:	" + respuesta;
      });
  });
  body.appendChild(tabla);
}

const url = `https://pokeapi.co/api/v2/pokemon`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // data ya es objeto javascript
    procesarJSON(data);
  })
  .catch((respuesta) => {
    // Resppuesta error
    demo.innerHTML += "En el catch:	" + respuesta;
  });