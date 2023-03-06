const vBajo = document.getElementById("vBajo");
const vAlto = document.getElementById("vAlto");
const vMedio = document.getElementById("vMedio");

function procesarJSON(data) {
  const array = data.serie;
  let bajo = array[0];
  let alto = array[0];
  let primeraFecha = array[0].fecha;
  let ultimaFecha = array[0].fecha;
  let suma = 0;
  array.forEach((element) => {
    if (element.valor <= bajo.valor) {
      bajo = element;
    } else if (element.valor > alto.valor) {
      alto = element;
    }
    if (element.fecha < primeraFecha) {
      primeraFecha = element.fecha;
    } else if (element.fecha > ultimaFecha) {
      ultimaFecha = element.fecha;
    }
    suma += element.valor;
  });
  const partesprimeraFecha = primeraFecha.split("T");
  const partesultimaFecha = ultimaFecha.split("T");
  vBajo.innerHTML = `El valor mas bajo ${bajo.valor} pesos, se dio el dia ${bajo.fecha}`;
  vAlto.innerHTML = `El valor mas bajo ${alto.valor} pesos, se dio el dia ${alto.fecha}`;
  vMedio.innerHTML = `El valor medio ha sido ${suma / array.length} pesos, entre el dia ${partesprimeraFecha[0]} y el dia ${partesultimaFecha[0]}`;
}

$.get("https://mindicador.cl/api/dolar", (respuesta) => {
  procesarJSON(respuesta);
});
