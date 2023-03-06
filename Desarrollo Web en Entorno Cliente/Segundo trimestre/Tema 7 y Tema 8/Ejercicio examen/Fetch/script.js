const body = document.getElementsByTagName("body")[0];

function crearTabla(objJSON){

    const tabla = document.createElement("table");
    tabla.style.textAlign="center";
    body.appendChild(tabla);
    const th1 = document.createElement("th");
    const contenidoTh1 = document.createTextNode("Cerveza numero")
    th1.appendChild(contenidoTh1);
    const th2 = document.createElement("th");
    const contenidoTh2 = document.createTextNode("Nombre de la cerbeza")
    th2.appendChild(contenidoTh2);
    const th3 = document.createElement("th");
    const contenidoTh3 = document.createTextNode("Texto comercial")
    th3.appendChild(contenidoTh3);
    const th4 = document.createElement("th");
    const contenidoTh4 = document.createTextNode("Descripcion")
    th4.appendChild(contenidoTh4);
    const th5 = document.createElement("th");
    const contenidoTh5 = document.createTextNode("Consejos para servirla");
    th5.appendChild(contenidoTh5);
    tabla.appendChild(th1);
    tabla.appendChild(th2);
    tabla.appendChild(th3);
    tabla.appendChild(th4);
    tabla.appendChild(th5);
    objJSON.forEach(element => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const contenidoTd1 = document.createTextNode(`${element.id}`);
        td1.style.border = "1px solid black";
        td1.appendChild(contenidoTd1);
        const td2 = document.createElement("td");
        const contenidoTd2 = document.createTextNode(`${element.name}`);
        td2.style.border = "1px solid black";
        td2.appendChild(contenidoTd2);
        const td3 = document.createElement("td");
        const contenidoTd3 = document.createTextNode(`${element.tagline}`);
        td3.style.border = "1px solid black";
        td3.appendChild(contenidoTd3);
        const td4 = document.createElement("td");
        const contenidoTd4 = document.createTextNode(`${element.description}`);
        td4.style.border = "1px solid black";
        td4.appendChild(contenidoTd4);
        const td5 = document.createElement("td");
        const contenidoTd5 = document.createTextNode(`${element.brewers_tips}`);
        td5.style.border = "1px solid black";
        td5.appendChild(contenidoTd5);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tabla.appendChild(tr);

    });
}


// Fetch que recibe informacion como JSON
const url = `https://api.punkapi.com/v2/beers333`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // data ya es objeto javascript
    crearTabla(data);
  })
  .catch((respuesta) => {
    // Resppuesta error
    demo.innerHTML = "";
    demo.innerHTML = "En el catch:    " + respuesta;
  });
