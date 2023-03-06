const tabla = document.getElementsByTagName("tbody")[0];

function primero (){
    const primero = tabla.firstElementChild.firstElementChild.firstElementChild;
    primero.style.backgroundColor = "red";
}
function segundo(){
    const segundo =tabla.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
    segundo.style.backgroundColor = "green";
}
function ultimo (){
    const ultimo = tabla.lastElementChild.lastElementChild.firstElementChild;
    ultimo.style.backgroundColor = "blue";
}
function penultimo (){
    const penultimo = tabla.lastElementChild.lastElementChild.previousElementSibling.firstElementChild;
    penultimo.style.backgroundColor = "grey";
}
function subir(){
    const borrado = tabla.removeChild(tabla.firstElementChild);
    tabla.appendChild(borrado);
}
function bajar(){
    const borrado = tabla.removeChild(tabla.lastElementChild);
    tabla.insertBefore(borrado, tabla.firstElementChild);
}