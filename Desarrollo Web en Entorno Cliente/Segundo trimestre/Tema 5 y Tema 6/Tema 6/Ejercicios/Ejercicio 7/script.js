let boton = document.getElementById("tipoVida");

boton.addEventListener("click", (event) => {
    event.preventDefault();

    let elementos = document.getElementById("formulario").elements;
    let contador = 0;
    Array.from(elementos).forEach((elem) => {
        if(elem.tagName === "INPUT" && elem.type === "checkbox" && elem.checked){
            contador++;
        }
    });
    if (contador >= 3) {
        sana.checked = true; 
    }else if(contador > 1 && contador <=2){
        pocoInsana.checked = true;
    }else if(contador <= 1){
        insana.checked = true;
    }
});