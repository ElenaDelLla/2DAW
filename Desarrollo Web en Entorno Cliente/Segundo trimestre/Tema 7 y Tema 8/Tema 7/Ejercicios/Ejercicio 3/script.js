const botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("click", () => {
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const xmlDoc = this.responseXML;
            const menu = xmlDoc.getElementsByTagName("menu_almuerzo")[0];
            const comidas = menu.getElementsByTagName("comida");
            Array.from(comidas).forEach(comida => {
               const nombre =  comida.getElementsByTagName("nombre")[0];
               demo.innerHTML += `La comida ${nombre.textContent} tiene `;
               const calorias = comida.getElementsByTagName("calorias")[0];
               demo.innerHTML += `${calorias.textContent} calorias <br>`;

            });
      }
    }
    peticion.open("POST", "ej3UT7.xml", true);
    peticion.send();
});