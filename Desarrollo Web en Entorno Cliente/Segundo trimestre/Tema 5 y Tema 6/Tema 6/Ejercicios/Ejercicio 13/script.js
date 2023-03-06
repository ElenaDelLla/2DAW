const boton = document.getElementById("comprobar");
const patron = /^((([0][1-9])|[1-2][0-9]|[3][0-1])-([0][1-9]|[1][0-2])-([0-9]{4}))$/;
const patronDia = /^([0][1-9]|[1-2][0-9]|[3][0-1])$/;
const patronMes = /^([0][1-9]|[1][0-2])$/;
const patronAnio = /^[0-9]{4}$/;

//const patronCompleto = /^(((((([0][1-9])|[1-2][0-9]|[3][0-1])-([0][13578]|[1][02])))|(((([0][1-9])|[1-2][0-9]|30)-([0][469]|11)))|(((([0][1-9])|[1][0-9]|[2][0-8])-02)))-([0-9]{4}))$/;

boton.addEventListener("click", (event) =>{
    event.preventDefault();
    const fecha = document.getElementById("fecha");
    // Apartado A

    /*const trozos = fecha.split("-");
    if (trozos.length === 3) {
        const resultadoDia = patronDia.test(trozos[0]);
        const resultadoMes = patronMes.test(trozos[1]);
        const resultadoAnio = patronAnio.test(trozos[2]);
        if(resultadoDia && resultadoMes && resultadoAnio){
            mostrar.innerHTML = "La fecha es correcta";
        }else{
            mostrar.innerHTML = "La fecha es incorrecta"; 
        }

    }else{
        mostrar.innerHTML = "El formato no es correcto";
    }*/


    // Apartado B
    /*let resultado = patron.test(fecha);
    if(resultado){
        mostrar.innerHTML = "La fecha es correcta";
    }else{
        mostrar.innerHTML = "La fecha es incorrecta";
    }*/

    // Apartado C
    let resultado = patronCompleto.test(fecha);
    if(resultado){
        mostrar.innerHTML = "La fecha es correcta";
    }else{
        mostrar.innerHTML = "La fecha es incorrecta";
    }
});
