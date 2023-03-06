let botonvalores = document.getElementById("valores");
let botoncambiar = document.getElementById("cambiar");
let botonCambiarValor = document.getElementById("pregunta")

botonvalores.addEventListener("click", () => {
    mostrar.innerHTML = `El valor del input es ${nombre.value} y el valor por defecto es ${nombre.defaultValue}`;
});

botoncambiar.addEventListener("click", () => {
    nombre.defaultValue = "Goofy";
});

botonCambiarValor.addEventListener("click", () =>{
    if (nombre.value == nombre.defaultValue){
        mostrar.innerHTML = "Ambos valores son iguales";
    }else{
        mostrar.innerHTML = `El valor del imput es ${nombre.value} y el valor por defecto es ${nombre.defaultValue}`;
    }
});

