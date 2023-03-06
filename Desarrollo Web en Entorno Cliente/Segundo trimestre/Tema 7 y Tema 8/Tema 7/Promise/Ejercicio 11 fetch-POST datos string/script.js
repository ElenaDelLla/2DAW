const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("nombre");
  /*const peticion = new XMLHttpRequest();
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
  peticion.open("GET", `ej6UT7.php?nombre=${input.value}`, true);
  peticion.send();*/
  const url="ej6UT7.php";
  fetch(url, {
    method: "POST",
    body: `nombre=${input.value}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.text())
    .then((data) => {
      switch (data) {
        case "OK":
          demo.innerHTML = "Este nombre existe en el servidor";
          break;
        case "NOK":
          demo.innerHTML = "Este nombre no existe en el servidor";
          break;
      }
    });
});
