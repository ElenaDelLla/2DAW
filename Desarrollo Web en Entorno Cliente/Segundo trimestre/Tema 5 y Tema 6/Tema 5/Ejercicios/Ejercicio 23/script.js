let parrafo = document.getElementById("parrafo");
let boton = document.getElementById("boton");

parrafo.addEventListener("mouseover", pasarRaton, false);

function pasarRaton(){
    mostrar.innerHTML += "Eres el/la mejor. <br>";
}
parrafo.addEventListener("click", eliminarEvento,false);
function eliminarEvento(){
  parrafo.removeEventListener("mouseover", pasarRaton, false);
  mostrar.innerHTML = "";  
}

boton.addEventListener("click", eliminarEvento,false);
