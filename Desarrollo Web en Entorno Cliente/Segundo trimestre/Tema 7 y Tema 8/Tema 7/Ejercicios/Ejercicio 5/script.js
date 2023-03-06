const botonTemperatura = document.getElementById("botonTemp");

botonTemperatura.addEventListener("click", () => {
  const peticion = new XMLHttpRequest();
  demo.innerHTML = "";
  peticion.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const ficheroXML = this.responseXML;
      const arrayTimes = ficheroXML.getElementsByTagName("time"); // sacamos todas las etiquetas "time"
      const tabla = document.createElement("table"); // creamos la tabla
      const th1 = document.createElement("th");
      const th2 = document.createElement("th");
      const th3 = document.createElement("th");
      const th4 = document.createElement("th");
      const th5 = document.createElement("th");
      const textoTh1 = document.createTextNode("Dia");
      const textoTh2 = document.createTextNode("Hora inicio");
      const textoTh3 = document.createTextNode("Hora fin");
      const textoTh4 = document.createTextNode("Temperatura (ºC)");
      const textoTh5 = document.createTextNode("Sensación Térmica (ºC)");
      th1.appendChild(textoTh1);
      th2.appendChild(textoTh2);
      th3.appendChild(textoTh3);
      th4.appendChild(textoTh4);
      th5.appendChild(textoTh5);
      tabla.appendChild(th1);
      tabla.appendChild(th2);
      tabla.appendChild(th3);
      tabla.appendChild(th4);
      tabla.appendChild(th5);

        //Crear tabla en una funcion aparte
      Array.from(arrayTimes).forEach((time) => { // recorremos array 
        const desde = time.getAttribute("from"); // sacamos la etiqueta from de dentro de time
        const partesDesde = desde.split("T"); // Separamos la fecha por T, para tener por un lado la fecha y por otro las horas
        const hasta = time.getAttribute("to"); // sacamos la etiqueta to de dentro de time
        const partesHasta = hasta.split("T"); // Separamos la fecha por T, para tener por un lado la fecha y por otro las horas
        const temperatura = time.getElementsByTagName("temperature")[0].getAttribute("value"); // Sacamos la etiqueta temperatura y de ella obtenemos su atributo valor
        const sensacionTermica = time.getElementsByTagName("feels_like")[0].getAttribute("value"); // Sacamos la etiqueta feels_like y de ella obtenemos su atributo valor
        const fila = document.createElement("tr");
        const celda1 = document.createElement("td");
        const celda2 = document.createElement("td");
        const celda3 = document.createElement("td");
        const celda4 = document.createElement("td");
        const celda5 = document.createElement("td");
        const texto1 = document.createTextNode(partesDesde[0]);
        const texto2 = document.createTextNode(partesDesde[1]);
        const texto3 = document.createTextNode(partesHasta[1]);
        const texto4 = document.createTextNode(temperatura);
        const texto5 = document.createTextNode(sensacionTermica);
        
        celda1.appendChild(texto1);
        celda2.appendChild(texto2);
        celda3.appendChild(texto3);
        celda4.appendChild(texto4);
        celda5.appendChild(texto5);

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        fila.appendChild(celda5);
        tabla.appendChild(fila);
      });

      demo.appendChild(tabla);
    }
  };
  peticion.open("GET","https://api.openweathermap.org/data/2.5/forecast?q=Madrid,es&lang=es&units=metric&mode=xml&appid=479092b77bcf850403cb2aeb1a302425",true);
  peticion.send();
});
