let boton = document.getElementById("datos");

boton.addEventListener("click", (event) => {
    event.preventDefault();
    let elementos = document.getElementById("formulario").elements;

    Array.from(elementos).forEach((elem) => {
        if(elem.tagName === "INPUT" && elem.checked){
            alert(elem.value);
        }
    });
});