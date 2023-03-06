const boton = document.getElementById("botonProvincias");

boton.addEventListener("click", (event) => {
    event.preventDefault();
    const select = document.getElementById("provincias");
    const opciones = select.options;
    /*Array.from(opciones).forEach((elemt, index) =>{
        if(select.selectedIndex == index){
            encabezado.innerHTML = elemt.value;
        }
    });*/
    /*if(select.selectedIndex>=0){
        encabezado.innerHTML = opciones[select.selectedIndex].value;
    }*/
    encabezado.innerHTML = "";
    Array.from(opciones).forEach((elemt) =>{
        if(elemt.selected){
            encabezado.innerHTML += elemt.value;
        }
    });

});

