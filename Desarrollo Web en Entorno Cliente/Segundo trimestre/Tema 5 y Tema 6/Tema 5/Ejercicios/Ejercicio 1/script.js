let boton = document.getElementById("imprimeAtributos");
let input = document.getElementById("apellidos");
boton.addEventListener('click',mostrarAtributos_fn, false);

function mostrarAtributos_fn(){
    let atributosInput = input.attributes;
    mostrar.innerHTML = "";
    Array.from(atributosInput).forEach( (atributo) => {
        mostrar.innerHTML += `${atributo.name} : ${atributo.value} <br>`;
    }); 
}

let cambiaTipoInput = document.getElementById("cambiaTipo");
cambiaTipoInput.addEventListener('click', cambiarTipo_fn, false);
function cambiarTipo_fn(){
    input.setAttribute('type', 'number');
}

let cambiaTamanioInput = document.getElementById("cambiaTamanio");
cambiaTamanioInput.addEventListener('click', cambiarTamanio_fn,false);
function cambiarTamanio_fn(){
    input.setAttribute('size', 100);
}

let cambiaPlacehorderInput = document.getElementById("cambiaPlacehorder");
cambiaPlacehorderInput.addEventListener('click', cambiarPlaceholder_fn, false);
function cambiarPlaceholder_fn(){
    input.setAttribute('placeholder', 40);
}

let eliminarSizeInput = document.getElementById("eliminaSize");
eliminarSizeInput.addEventListener('click', eliminarSize_fn, false);
function eliminarSize_fn(){
    input.removeAttribute('size');
}
