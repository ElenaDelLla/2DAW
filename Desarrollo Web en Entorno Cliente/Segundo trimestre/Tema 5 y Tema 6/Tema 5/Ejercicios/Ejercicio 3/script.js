let arrayAtributo = document.getElementsByName("ciudad");
let boton = document.getElementById("listar");
boton.addEventListener('click', mostarAtributos_fn,false);
function mostarAtributos_fn(){
    Array.from(arrayAtributo).forEach(element => {
        mostrar.innerHTML += `${element.name} ${element.value} <br>`;
    });
}