demo.addEventListener("mouseover", mostrar);
info.addEventListener("mouseout", mostrar);

function mostrar(event){
    info.innerHTML += `Related Target es: ${event.relatedTarget} <br>`;
}