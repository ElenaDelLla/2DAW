let elementoParrafo = document.getElementsByTagName("p")[0];
let arrayAtributos = elementoParrafo.attributes;

function mostrarAtributos_fn(){
    let resultados = "";
    Array.from(arrayAtributos).forEach(element => {
        resultados += `${element.name} ${element.value} \n`;
    });
    alert(resultados);
}
mostrarAtributos_fn();