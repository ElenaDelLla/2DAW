let aplicado = false;
azul.onclick = fondo_azul_fn;
function fondo_azul_fn(){
    let arrayBotones = document.getElementsByTagName("tbody")[0].getElementsByTagName("button");
    if(!aplicado){
        Array.from(arrayBotones).forEach((element,index) => {
        if((index+1) % 2 == 0){
          element.classList.add("azul");  
        }
        });
        aplicado = true;
    } else {
        Array.from(arrayBotones).forEach((element,index) => {
        if((index+1) % 2 == 0){
            element.classList.remove("azul");  
        }
        });
        aplicado = false;
    }
}
verde.onclick = fondo_verde_fn;
function fondo_verde_fn(){
let arrayBotones = document.getElementsByTagName("tbody")[0].getElementsByTagName("button");
    Array.from(arrayBotones).forEach((element,index) => {
        if ((index+1) % 2 != 0) {
            element.style.backgroundColor = "green";
        }
    });

}