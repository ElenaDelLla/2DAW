const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("nombre");
  const peticion = new XMLHttpRequest();

  peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState === 4 && peticion.status === 200) {
      switch (peticion.statusText) {
        case "OK":
            const provincias = peticion.responseText.split(",");
            provincias.forEach(provincia => {
                demo.innerHTML += `Provincia: ${provincia}`;
            });
          break;
        case "NOK":
            demo.innerHTML = "Este nombre no existe en el servidor";
          break;
      }
    }
  });
  peticion.open("GET", `ej12UT7.php?comunidad_autonoma=${input.value}`, true);
  peticion.send();
});
