let nodosHijos = document.getElementsByTagName("p")[0].childNodes;
let botonAddDocumento = document.getElementById("addDocumento");
let botonAdd = document.getElementById("addHola");

botonAddDocumento.addEventListener('click', addHolaDocumento_fn, false);
botonAdd.addEventListener('click', addHola_fn,false);

function addHolaDocumento_fn(){
    const ultimoNodo = nodosHijos[nodosHijos.length-1];
    ultimoNodo.nodeValue = " HOLA "+ultimoNodo.nodeValue;
}

function addHola_fn(){
    const nodoCentral = nodosHijos[1];
    const nodosHijosDeCentral = nodoCentral.childNodes;
    const ultimoNodo = nodosHijosDeCentral[nodosHijosDeCentral.length-1]
    ultimoNodo.nodeValue = " HOLA "+ultimoNodo.nodeValue;
}

/*
const elementos = document.getElementsByTagName("p")[0].childNodes;

const arrayElementos = Array.from(elementos);

arrayElementos[arrayElementos.length-1].nodeValue += " HOLA";

const hijosB=arrayElementos[arrayElementos.length-2].childNodes;
hijosB[hijosB.length-1].nodeValue+=" HOLA"
*/
