
function obtenerDatos(docXML){
   const arrayTimes = docXML.getElementsByTagName("time");
   Array.from(arrayTimes).forEach(time => {
    const desde = time.getAttribute("from");
    const partesDesde = desde.split("T");
    const hasta = time.getAttribute("to");
    const partesHasta = hasta.split("T");
    const precipitaciones = time.getElementsByTagName("precipitation")[0];
    const probabilidad = precipitaciones.getAttribute("probability");

    demo.innerHTML += `Dia: ${partesDesde[0]} desde las ${partesDesde[1]} hasta las ${partesHasta[1]} la probabilidad de lluvia es ${probabilidad}<br>`;
   }); 
    
}
const peticion = new XMLHttpRequest();
peticion.addEventListener("readystatechange", () => {
    if(peticion.readyState === 4 && peticion.status === 200){
        const docXML = peticion.responseXML;
        obtenerDatos(docXML);
    }
});
peticion.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Cuenca,es&lang=es&units=metric&mode=xml&appid=479092b77bcf850403cb2aeb1a302425");
peticion.send();
