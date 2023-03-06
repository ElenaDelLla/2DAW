let boton = document.getElementById("crearTabla");

boton.addEventListener("click", crearTabla_fn, false);

function crearTabla_fn(){
    let columnas = document.getElementById("col").value;
    let filas = document.getElementById("filas").value;

    let tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    while (filas > 0) {
        let tr = document.createElement("tr");
        let numCol = columnas;
        while(numCol > 0){
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            tr.appendChild(td);
            numCol--;
        }
        tabla.appendChild(tr);
        filas--;
    }
    mostrar.appendChild(tabla);
}