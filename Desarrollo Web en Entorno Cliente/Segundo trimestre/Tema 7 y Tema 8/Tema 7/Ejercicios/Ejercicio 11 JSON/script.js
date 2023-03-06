const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("nombre").value;
  const peticion = new XMLHttpRequest();
  const url = "procesar.php";
  const parametros = JSON.stringify({
    "nombre":input}
    );
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
  peticion.open("POST", url);
  peticion.send(parametros);
});
