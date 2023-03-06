resolver.onclick = resolver_fn;

function resolver_fn(){
    let numElementos = document.querySelectorAll(".importante").length;
    mostrar.innerHTML += "El número de elementos con la clase importante es: " + numElementos +"<br>";
   
    let elementoUnico = document.querySelector(".importante");
    mostrar.innerHTML += "El primer elemento encontrado con la clase importante es: " + elementoUnico.innerHTML+"<br>";
    let numDivs = document.querySelectorAll("div").length;
    mostrar.innerHTML += "El numero de divs es: " + numDivs+"<br>";
    let divId5 = document.querySelector("#div5");
    mostrar.innerHTML += "El div con id div5 es: " + divId5.innerHTML+"<br>";
}