const boton = document.getElementById("comprobar");
const patron = /^[0-9]{8}-[A-Z]$/;
const letras='TRWAGMYFPDXBNJZSQVHLCKE';

dni.addEventListener("keyup", (event) =>{
    event.preventDefault();
    let dni = document.getElementById("dni").value; 
    let resultado = patron.test(dni);
    if(resultado){
        let numero = dni.split("-")[0];
        let letra = dni.split("-")[1];
        let resto = numero % 23;
        if(letra.toUpperCase() === letras[resto]){
            mostrar.innerHTML = "Formato y letra correcta";
        }else{
            mostrar.innerHTML = "Formato correcto letra incorrecta";
        }
    }else{
        mostrar.innerHTML = "No cumple el formato: NNNNNNNN-X";
    }
});