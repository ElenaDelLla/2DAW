let parrafoHTML = document.getElementById("demo");
let boton = document.getElementById("crear");
boton.addEventListener('click', crearParrafo_fn, false);
function crearParrafo_fn(){
    let parrafo = document.createElement("p");
    let b = document.createElement("b");
    let br = document.createElement("br");
    parrafo.setAttribute('title',"Parrafo creado desde JavaScript");

let texto1 = document.createTextNode("Con JavaScript se ");
let texto2 = document.createTextNode("pueden realizar ");
let texto3 = document.createTextNode("un montón ");
let texto4 = document.createTextNode("de cosas sobre el documento.");

    b.appendChild(texto2);
    b.appendChild(br);
    b.appendChild(texto3);

    parrafo.appendChild(texto1);
    parrafo.appendChild(b);
    parrafo.appendChild(texto4);

    parrafoHTML.appendChild(parrafo);
}