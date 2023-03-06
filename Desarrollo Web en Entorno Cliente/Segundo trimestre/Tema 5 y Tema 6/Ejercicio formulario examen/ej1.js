const botonLimpiar = document.getElementById("limpiar");
const botonVer = document.getElementById("ver");
const botonEnviar = document.getElementById("enviar");
let oculto = true;

function nombreYApellido(){
    const nombreYApellido = document.getElementById("nombre").value;
    if (nombreYApellido !== "") {
        return true;
    }else {
        errores.innerHTML = `El nombre y el apellido son incorrectos <br>`;
        document.getElementById("nombre").focus();
        return false;
    }
}
function dni(){
    const dni = document.getElementById("nif").value;
    const patron = /^[0-9]{8}-? ?[A-Z]$/;
    const letras='TRWAGMYFPDXBNJZSQVHLCKE';

    let resultado = patron.test(dni);
    if(resultado){
        let numero = dni.substring(0, 8);
        let letra = dni[dni.length - 1];
        let resto = numero % 23;
        if(letra === letras[resto]){
            return true;
        }else{
            errores.innerHTML = "Formato correcto letra incorrecta";
            document.getElementById("nif").focus();
            return false;
        }
    }else{
        errores.innerHTML = "No cumple el formato";
        document.getElementById("nif").focus();
        return false;
    }
}
function telefono(){
    const telefon = document.getElementById("telefono").value;
    const patronTelefono = /^(6|9)[0-9]{8}$/;
    if(patronTelefono.test(telefon)){
        return true;
    }else{
        errores.innerHTML = `El telefono es incorrecto, debe tener 9 números, empezando por 6 ó 9 <br>`;
        document.getElementById("telefono").focus();
        return false;
    }
}

function pass(){
    const contrasenia = document.getElementById("contras").value;
    const patronPass = /^(?=\w*[0-9])(?=\w*[A-Z])(?=\w*)\S{8}$/;
    if(patronPass.test(contrasenia)){
        return true;
    }else{
        errores.innerHTML = `La contraseña es incorrecta, debe tener al menos 8 caracteres, al menos 1 letra y al menos 1 número <br>`;
        document.getElementById("contras").focus();
        return false;
    }
}

function confirmarPass(){
    const confirmarPass = document.getElementById("contras2").value;
    const contrasenia = document.getElementById("contras").value;
    if(confirmarPass === contrasenia){
        return true;
    }else{
        errores.innerHTML = `Las contraseñas no coinciden <br>`;
        return false;
    }
}

botonLimpiar.addEventListener("click", () => {
    document.getElementById("formulario").reset();
});

botonVer.addEventListener("click", () => {
    if(oculto){
        document.getElementById("contras").setAttribute("type", "text");
        document.getElementById("contras2").setAttribute("type", "text");

        botonVer.setAttribute("value", "Ocultar");
    }else{
        document.getElementById("contras").setAttribute("type", "password");
        document.getElementById("contras2").setAttribute("type", "password");

        botonVer.setAttribute("value", "Ver");
    }
});

botonEnviar.addEventListener("click", (event) => {

    if(nombreYApellido() && dni() && telefono() && pass() && confirmarPass() && confirm("¿Estás seguro de que quieres enviar el formulario?")){
        return true;
    }else{
        event.preventDefault();
        return false;
    }
});