const body = document.getElementsByTagName("body")[0];

function procesarJSON(data) {
  const tabla = document.createElement("table");
  tabla.style.border = "1px solid black";
  body.appendChild(tabla);
  const th1 = document.createElement("th");
  const contenidoTd1 = document.createTextNode("Nombre");
  th1.appendChild(contenidoTd1);
  const th2 = document.createElement("th");
  const contenidoTd2 = document.createTextNode("Imagen");
  th2.appendChild(contenidoTd2);
  tabla.appendChild(th1);
  tabla.appendChild(th2);

  data.forEach(element => {
    const tr = document.createElement("tr");
    tabla.appendChild(tr);
    const td1 = document.createElement("td");
    td1.style.border = "1px solid black";
    const contenidoTd1 = document.createTextNode(element.name);
    td1.appendChild(contenidoTd1);
    const td2 = document.createElement("td");
    td2.style.border = "1px solid black";
    const img = new Image();
    img.src = element.img;
    img.style.width = "60px";
    td2.appendChild(img);
    tr.appendChild(td1);
    tr.appendChild(td2)

  });
 
}


// Fetch que recibe informacion como JSON
  const url = `https://digimon-api.vercel.app/api/digimon`;
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


    /*function procesarJSON(data) {
      data.forEach((element) => {
        const imagen = new Image();
        imagen.src = element.img;
        imagen.style.width = "60px";
        const parrafo1 = document.createElement("div");
        const parrafo2 = document.createElement("div");
        const parrafo3 = document.createElement("div");
        const contenido1 = document.createTextNode(`Nombre: ${element.name}`);
        const contenido2 = document.createTextNode(`Nivel: ${element.level}`);
        parrafo1.appendChild(contenido1);
        parrafo2.appendChild(contenido2);
        parrafo3.appendChild(imagen);
        demo.appendChild(parrafo1);
        demo.appendChild(parrafo2);
        demo.appendChild(parrafo3);
      });
    }
    const url = `https://digimon-api.vercel.app/api/digimon`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // data ya es objeto javascript
        procesarJSON(data);
      });*/