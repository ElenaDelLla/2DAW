comprobar.onclick = comprobar_email_fn;
function comprobar_email_fn(){
    let email = document.getElementById("email").value;
    let comprobarEmail = document.getElementById("confirmacion").value;
    try {
        if(email == "" || comprobarEmail == ""){
            throw {mensaje: "No has introducido alguno de los dos campos", color: "red"};
        }
        if(email != comprobarEmail){
            throw {mensaje: "El email introducido no coindice", color: "red"};
        }
        if(email.indexOf("@")!= -1){
            if(email.indexOf(".",email.indexOf("@")) == -1){
                throw {mensaje: "El email introducido no tiene un punto detras de la @", color: "red"};
            }
        } else {
            throw {mensaje: "El email introducido no tiene @", color: "red"};
        }
        
        throw {mensaje: "El email introducido, " +email+ " es correcto", color: "white"};
        
    } catch (error) {
        mostrar.innerHTML = error.mensaje;
        document.getElementById("email").style.backgroundColor = error.color;
        document.getElementById("confirmacion").style.backgroundColor = error.color;
    }
    finally{
        document.getElementById("email").value = "";
        document.getElementById("confirmacion").value = "";
    }
}