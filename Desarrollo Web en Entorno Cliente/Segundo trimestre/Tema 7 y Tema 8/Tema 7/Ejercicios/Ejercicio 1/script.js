const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            demo.innerHTML = this.responseText;
        }
    }
    peticion.open("GET", "ej1UT7.txt", true);
    peticion.send();
});