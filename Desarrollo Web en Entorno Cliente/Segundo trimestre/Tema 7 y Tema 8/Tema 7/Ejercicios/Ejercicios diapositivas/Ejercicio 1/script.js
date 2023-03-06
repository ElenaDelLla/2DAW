const botonConsultar = document.getElementById("consultar");
const valorInput = document.getElementById("ciudad");

botonConsultar.addEventListener("click", () => {
  const peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      const xmlDoc = this.responseXML;
      const location = xmlDoc.getElementsByTagName("location")[0].getElementsByTagName("name")[0].textContent;
      let table = document.createElement("table");
      table.style.border = "1px solid black";
      const th1 = document.createElement("th");
      const th2 = document.createElement("th");
      textth1 = document.createTextNode("Dia");
      textth2 = document.createTextNode("Temperatura");
      th1.appendChild(textth1);
      th2.appendChild(textth2);
      table.appendChild(th1);
      table.appendChild(th2);
      const tiempo = xmlDoc.getElementsByTagName("time");
      for (let i = 0; i < tiempo.length; i++) {
        const tr = document.createElement("tr");
        tr.style.border = "1px solid black";
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.style.border = "1px solid black";
        td2.style.border = "1px solid black";
        td1.style.textAlign = "center";
        td2.style.textAlign = "center";
        const text1 = document.createTextNode(tiempo[i].getAttribute("from"));
        const text2 = document.createTextNode(tiempo[i].getElementsByTagName("temperature")[0].getAttribute("value"));
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
      }
      demo.appendChild(table);
      document.getElementsByTagName("h1")[0].textContent += location;
    }
  };
  const appid = "479092b77bcf850403cb2aeb1a302425";
  const urlTiempo = `https://api.openweathermap.org/data/2.5/forecast?q=${valorInput.value},es&lang=es&units=metric&mode=xml&appid=${appid}`;
  peticion.open("GET", urlTiempo, true);
  peticion.send();
});