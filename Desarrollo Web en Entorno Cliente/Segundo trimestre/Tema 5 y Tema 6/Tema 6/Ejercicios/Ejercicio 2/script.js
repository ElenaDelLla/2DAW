let botonCambios = document.getElementById("cambios");

botonCambios.addEventListener("click", (event) => {
    event.preventDefault();
    const formulario = document.getElementById("formulario");
    const elementos = formulario.elements;
    Array.from(elementos).forEach((elemento)=>{
        if(elemento.tagName==="INPUT" && elemento.type==="checkbox"){
            if(elemento.checked===elemento.defaultChecked){
                mostrar.innerHTML+=`El elemento ${elemento.id} no ha cambiado <br>`;
            }else{
                mostrar.innerHTML+=`El elemento ${elemento.id} ha cambiado <br>`;
            }
        }
    })
});