const div = document.getElementById("div1");

div.addEventListener("mouseover", crear);

function crear () {
    const encabezado = document.createElement("h1");
    const textoEncabezado = document.createTextNode("Encabezado H1 creado dinamicamente");
    encabezado.appendChild(textoEncabezado);

    const caption = document.createElement("caption");
    const textoCaption = document.createTextNode("Tabla creada dinamicamente y texto sobre elemento caption");
    caption.appendChild(textoCaption);

    const tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    let filas = 10;
    const columnas = 5;

    while (filas > 0) {
        let tr = document.createElement("tr");
        let numCol = columnas;
        while (numCol > 0) {
            let td = document.createElement("td");
            let contenido = document.createTextNode(`celda ${10-filas} ${5-numCol}`);
            td.appendChild(contenido);
            td.setAttribute("width", "15px");
            td.style.border = "1px solid black";
            tr.appendChild(td);
            numCol--;
        }
        filas--;
        tabla.appendChild(tr);
    }
    div.appendChild(encabezado);
    div.appendChild(caption);
    div.appendChild(tabla);

    div.removeEventListener("mouseover", crear);
}

