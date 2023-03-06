const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  const peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    switch (this.readyState) {
      case 1:
        demo.innerHTML += `Conexión establecida con el servidor <br>`;
        break;
      case 2:
        demo.innerHTML += `El servidor ha recibido la petición <br>`;
        break;
      case 3:
        demo.innerHTML += `El servidor está procesando la petición <br>`;
        break;
      case 4:
        demo.innerHTML += `Respuesta recibida del servidor <br>`;
        if (this.status === 200) {
            demo.innerHTML += `Respuesta correcta <br>`;
        } else {
            demo.innerHTML += `Respuesta incorrecta. Error ${this.status} : ${this.statusText} <br>`;
        }
        break;

      default:
        break;
    }
  };
  peticion.open("GET", "ej1UT7.txt", true);
  peticion.send();
});
