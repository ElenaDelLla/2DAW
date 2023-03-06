const boton = document.getElementById("info");

boton.addEventListener("click", (event)=>{
    event.preventDefault();
    const formulario = document.getElementById("formulario");

    const elementos = formulario.elements;
    let numero = elementos.length;

    mostrar.innerHTML = `El número de elementos es: ${numero} <br>`;

    Array.from(elementos).forEach(elemento => {
        if(elemento.tagName==="INPUT" && elemento.type==="checkbox"){
            mostrar.innerHTML += `${elemento.id}: checked: ${elemento.checked} defaultChecked: ${elemento.defaultChecked} <br>`;

        }
    });
   
});

