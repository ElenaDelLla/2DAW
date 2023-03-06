const inputs = document.getElementsByTagName("input");
const boton = document.getElementById("enviar");

boton.addEventListener('click', mostarValores_fn, false);
function mostarValores_fn(){
    for (let index = 0; index < inputs.length; index++) {
        mostrar.innerHTML += `${inputs[index].id} : ${inputs[index].value} <br>`;
    }
}