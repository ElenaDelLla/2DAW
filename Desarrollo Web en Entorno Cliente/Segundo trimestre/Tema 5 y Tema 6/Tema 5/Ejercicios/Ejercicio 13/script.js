function validarEdad() {
    const edad = prompt("Introduce tu edad");
    if(edad>18){
        return true;
    } else{
        document.getElementById("aviso").innerHTML="Sólo puedes acceder si eres mayor de edad";
        return false;
    }
  }