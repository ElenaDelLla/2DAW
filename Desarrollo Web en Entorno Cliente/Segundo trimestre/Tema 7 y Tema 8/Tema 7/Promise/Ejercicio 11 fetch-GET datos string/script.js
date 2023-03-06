const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("nombre");
  /*const peticion = new XMLHttpRequest();
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
    peticion.open("GET", `ej6UT7.php?nombre=${input.value}`, true);
    peticion.send();*/

  const url = `ej6UT7.php?nombre=${input.value}`;
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
        demo.innerHTML="Todo ha ido bien <br>"
        switch (data) {
            case "OK":
              demo.innerHTML += "Este nombre existe en el servidor";
              break;
            case "NOK":
              demo.innerHTML += "Este nombre no existe en el servidor";
              break;
          }
    });
});
