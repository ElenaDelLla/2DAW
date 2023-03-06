const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("nombre");
  const peticion = new XMLHttpRequest();
  peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState === 4 && peticion.status === 200) {
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
  peticion.open("POST", `procesar.php`, true);
  peticion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  peticion.send(`nombre=${input.value}`);
});
