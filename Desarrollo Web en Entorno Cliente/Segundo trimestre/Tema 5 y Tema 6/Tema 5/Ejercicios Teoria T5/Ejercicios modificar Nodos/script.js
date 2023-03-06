let elementDiv = document.getElementsByTagName("div")[0];
let clonParPrimero= elementDiv.firstElementChild.cloneNode(true);
let clonDivCompleto = elementDiv.cloneNode(true);

document.body.appendChild(clonDivCompleto);
document.body.removeChild(clonDivCompleto);

let clonUltimoParrafo = elementDiv.lastElementChild.cloneNode(true);
let segundoParrafo = elementDiv.firstElementChild.nextElementSibling;
let insertar = elementDiv.insertBefore(clonUltimoParrafo, segundoParrafo);
