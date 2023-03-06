let elemento = document.getElementsByName("deporte");
elemento[elemento.length - 1].checked = true;

enviar.onclick = comprobar_fn;
function comprobar_fn(){
let arrayDeportes = document.getElementsByName("deporte");
arrayDeportes.forEach(element => {
    if(element.checked == true){
        mostrar.innerHTML = element.value; 
    }
});
}
