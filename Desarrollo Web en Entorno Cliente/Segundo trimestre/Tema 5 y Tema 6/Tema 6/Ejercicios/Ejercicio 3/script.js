let formulario = document.getElementById("formulario").ciudad;

Array.from(formulario).forEach(elemento=> {
    mostrar.innerHTML += `El número de elementos del formulario es ${formulario.length}  <br>
    El valor del atributo checked es ${elemento.checked}  <br>
    El defaultChecked es  ${elemento.defaultChecked}`;
    if(elemento.checked){
        mostrar.innerHTML += elemento.value;
    }

});



