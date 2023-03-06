const inputProvincia = document.getElementById("provincia");
const inputApellido = document.getElementById("apellidos");
const inputNombre = document.getElementById("nombre");
const boton = document.getElementById("boton");

inputProvincia.addEventListener("input", (event) => { //keyup
    const peticion = new XMLHttpRequest();
    peticion.addEventListener("readystatechange", () => {
        if(peticion.readyState === 4 && peticion.status === 200){
            demo1.innerHTML = peticion.responseText;
        }
    });
    peticion.open("GET",`ej9UT7.php?provincia=${inputProvincia.value}`, true);
    peticion.send();
});

boton.addEventListener("click", (event) => {
    event.preventDefault();
    demo2.innerHTML = `Nombre: ${inputNombre.value}<br />
                        Apellido: ${inputApellido.value}<br />
                        Provincia: ${inputProvincia.value}`;
});
