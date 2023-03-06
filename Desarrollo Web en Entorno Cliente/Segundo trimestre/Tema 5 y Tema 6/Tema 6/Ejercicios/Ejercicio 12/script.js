const boton = document.getElementById("comprobar");
const patron = /^[0-9]{4}-[a-zA-Z]{3}$/;

boton.addEventListener("click", (event) =>{
    event.preventDefault();
    const matricula = document.getElementById("matricula").value;
    let resultado = patron.test(matricula);
    if (resultado) {
        mostrar.innerHTML = "La matricula es correcta";
    }else{
        mostrar.innerHTML = "La matricula es incorrecta";
    }
});
