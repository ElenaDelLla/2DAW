const body = document.getElementsByTagName("body")[0];
const botonCargar = document.getElementById("cargar");

function crearTabla(docXML){
    const tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    const th1 = document.createElement("th");
    const contenidoTh1 = document.createTextNode("Titulo");
    th1.appendChild(contenidoTh1);
    const th2 = document.createElement("th");
    const contenidoTh2 = document.createTextNode("Artista");
    th2.appendChild(contenidoTh2);
    tabla.appendChild(th1);
    tabla.appendChild(th2);
    const arrayCDs = docXML.getElementsByTagName("CD");
    Array.from(arrayCDs).forEach(CD => {
        const titulo = CD.getElementsByTagName("TITLE")[0].textContent;
        const artista = CD.getElementsByTagName("ARTIST")[0].textContent;

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.style.border = "1px solid black";
        const contenidoTd1 = document.createTextNode(titulo);
        td1.appendChild(contenidoTd1);
        const td2 = document.createElement("td");
        const contenidoTd2 = document.createTextNode(artista);
        td2.style.border = "1px solid black";
        td2.appendChild(contenidoTd2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabla.appendChild(tr);
    });
    body.appendChild(tabla)
}

botonCargar.addEventListener("click", () => {
    const peticion = new XMLHttpRequest();
    peticion.addEventListener("readystatechange", () => {
        if(peticion.readyState === 4 && peticion.status === 200){
            const docXML = peticion.responseXML;
            crearTabla(docXML);
        }
    });
    peticion.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml");
    peticion.send();
});