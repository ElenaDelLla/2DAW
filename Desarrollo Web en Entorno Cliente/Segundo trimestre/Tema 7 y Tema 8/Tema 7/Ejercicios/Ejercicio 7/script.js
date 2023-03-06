const botonComprobar = document.getElementById("comprobar");
const botonHacer = document.getElementById("hacer");

botonComprobar.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("nombre");
    const peticion = new XMLHttpRequest();
    peticion.addEventListener("readystatechange", () => {
        if(peticion.readyState === 4 && peticion.status === 200){
            switch (peticion.responseText) {
                case "OK":
                  demo.innerHTML = "Este nombre existe en el servidor";
                  break;
                case "NOK":
                  demo.innerHTML = "Este nombre no existe en el servidor";
                  break;
              }
        }
    });
    peticion.open("GET", `ej6UT7.php?nombre=${input.value}`, false);
    peticion.send();
});

botonHacer.addEventListener("click", (event) => {
    event.preventDefault();
    demo.innerHTML = "He hecho algo";
});