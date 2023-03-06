const botonTemperatura = document.getElementById("botonTemp");

botonTemperatura.addEventListener("click", () => {
  const peticion = new XMLHttpRequest();
  demo.innerHTML = "";
  peticion.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const ficheroXML = this.responseXML;
      const arrayTimes = ficheroXML.getElementsByTagName("time"); // sacamos todas las etiquetas "time"
      Array.from(arrayTimes).forEach((time) => { // recorremos array 
        const desde = time.getAttribute("from"); // sacamos la etiqueta from de dentro de time
        const partesDesde = desde.split("T"); // Separamos la fecha por T, para tener por un lado la fecha y por otro las horas
        const hasta = time.getAttribute("to"); // sacamos la etiqueta to de dentro de time
        const partesHasta = hasta.split("T"); // Separamos la fecha por T, para tener por un lado la fecha y por otro las horas
        const temperatura = time.getElementsByTagName("temperature")[0].getAttribute("value"); // Sacamos la etiqueta temperatura y de ella obtenemos su atributo valor
        const sensacionTermica = time.getElementsByTagName("feels_like")[0].getAttribute("value"); // Sacamos la etiqueta feels_like y de ella obtenemos su atributo valor
        demo.innerHTML += `Dia ${partesDesde[0]} desde las ${partesDesde[1]} hasta las ${partesHasta[1]} : Temperatura -> ${temperatura} Sensacion térmica -> ${sensacionTermica} <br>`;
      });
    }
  };
  peticion.open("GET","https://api.openweathermap.org/data/2.5/forecast?q=Madrid,es&lang=es&units=metric&mode=xml&appid=479092b77bcf850403cb2aeb1a302425",true);
  peticion.send();
});
