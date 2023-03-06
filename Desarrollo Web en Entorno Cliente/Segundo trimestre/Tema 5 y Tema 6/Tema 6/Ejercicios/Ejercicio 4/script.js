let boton1 = document.getElementById("btn1");
let boton2 = document.getElementById("btn2");

boton1.addEventListener("click", (event) => {
    event.preventDefault();
    let elemento = document.getElementById("formulario").elements;
    Array.from(elemento).forEach((elem) => {
        if(elem.tagName === "INPUT" && elem.type === "text"){
            elem.value = "";
        }else if(elem.tagName === "INPUT" && elem.type === "radio"){
            elem.checked = false;
        }else if(elem.tagName === "INPUT" && elem.type === "date"){
            elem.value = "";
        }
    });
});

boton2.addEventListener("click", (event) => {
    event.preventDefault();
    let formulario = document.getElementById("formulario").reset();
});
