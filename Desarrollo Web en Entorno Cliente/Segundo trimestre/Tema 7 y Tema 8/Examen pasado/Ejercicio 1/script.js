const valorBajo = document.getElementById("vBajo");
const valorMedio = document.getElementById("vMedio");
const valorAlto = document.getElementById("vAlto");

const peticion = new XMLHttpRequest();
peticion.addEventListener("readystatechange", () => {
  if (peticion.readyState === 4 && peticion.status === 200) {
    const informacion = JSON.parse(peticion.responseText);
    let bajo = informacion.serie[0];
    let suma = 0;
    let alto = informacion.serie[0];
    let contador = 0;
    let media = 0;
    informacion.serie.forEach((element) => {
      if (element.valor > alto.valor) {
        alto = element;
      } else if (element.valor < bajo.valor) {
        bajo = element;
      }
      suma += element.valor;
      contador++;
    });
    media = suma / contador;
    const fechaBajo = bajo.fecha.split("T")[0];
    const fechaAlto = alto.fecha.split("T")[0];
    valorAlto.innerHTML = `El valor mas alto es ${alto.valor} ${informacion.unidad_medida} se dió el ${fechaBajo}`;
    valorBajo.innerHTML = `El valor mas alto es ${bajo.valor} ${informacion.unidad_medida} se dió el ${fechaAlto}`;
    valorMedio.innerHTML = `El valor medio es ${media}`;
  }
});
peticion.open("GET", "https://mindicador.cl/api/dolar");
peticion.send();



/*function procesarJSON(data) {
  let bajo = data.serie[0];
  let medio;
  let alto = data.serie[0];
  let contador = 0;
  let suma = 0;
  
  data.serie.forEach((element) => {

    if (element.valor > alto.valor) {
      alto.valor = element.valor;
      contador++;
    } else if (element.valor < bajo.valor) {
      bajo.valor = element.valor;
      contador++;
    }
    suma += element.valor;
    medio = suma / data.serie.length;
  });
  const partesAlto = alto.fecha.split("T");
  const partesBajo = bajo.fecha.split("T");

  vBajo.innerHTML += `Valor mas alto: ${alto.valor} el dia ${partesAlto[0]}`;
  vMedio.innerHTML += `Valor mas bajo: ${bajo.valor} el dia ${partesBajo[0]}`;
  vAlto.innerHTML += `Valor medio: ${medio}`;
}
const url = `https://mindicador.cl/api/dolar`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // data ya es objeto javascript
    procesarJSON(data);
  });*/