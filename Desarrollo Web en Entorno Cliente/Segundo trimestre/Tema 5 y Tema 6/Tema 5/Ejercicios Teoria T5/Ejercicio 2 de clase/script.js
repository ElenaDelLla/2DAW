calcular.onclick = calcular_fn;
function calcular_fn(){
    let arrayClase = document.getElementsByClassName("importante");
    let primerElemento = document.querySelector(".importante");
    let numeroDivs = document.querySelectorAll("div");
    let elementoId = document.querySelector("#div5");
    mostrar.innerHTML += "El número de elementos con la clase importante es: " + arrayClase.length + "<br>";
    mostrar.innerHTML += "El primer elemento con la clase importante es: " + primerElemento.innerHTML  + "<br>";
    mostrar.innerHTML += "El número de divs es: " + numeroDivs.length  + "<br>";
    mostrar.innerHTML += "El elemento con el id div5 es: " + elementoId.innerHTML  + "<br>";
}