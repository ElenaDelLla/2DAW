const boton = document.getElementById("comprobar");
const patron = /^(0?[1-9]|1[0-2])$/;

boton.addEventListener("click", (event) =>{
    event.preventDefault();
    const mes = document.getElementById("mes").value;
    let resultado = patron.test(mes);
    if(resultado){
        mostrar.innerHTML = "El número del mes es correcto";
    }else{
        mostrar.innerHTML = "El número del mes es incorrecto";
    }
});