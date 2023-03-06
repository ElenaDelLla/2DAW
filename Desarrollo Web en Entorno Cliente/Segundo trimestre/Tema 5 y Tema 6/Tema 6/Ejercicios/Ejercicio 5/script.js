let botonSano = document.getElementById("sano");
let botonInsano = document.getElementById("insano");

let elementos = document.getElementById("formulario").elements;
botonSano.addEventListener("click", (event) => {
    event.preventDefault();
    Array.from(elementos).forEach((elem) => {
        if (elem.tagName === "INPUT" && elem.type === "checkbox") {
            elem.checked = true;
        }
    });
});

botonInsano.addEventListener("click", (event) => {
    event.preventDefault();
    Array.from(elementos).forEach((elem) => {
        if (elem.tagName === "INPUT" && elem.type === "checkbox") {
            elem.checked = false;
        }
    });
});