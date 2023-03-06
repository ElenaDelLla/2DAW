resolver.onclick = resolver_decimales;
/*function resolver_decimales(){
    let num = parseFloat(numero.value);
    let decimal = parseFloat(decimales.value);
    let rest;
    try {
        rest = num.toExponential(decimal);
    } catch (error) {
        rest = "El número de decimales tiene que estar entre 0 y 100";
    }
    resultado.innerHTML += rest;
}*/

function resolver_decimales() {
  let result;
  try {
    if (!numero.value || !decimales.value) {
      throw "No se ha introducido alguno de los inputs";
    }
    let num = parseFloat(numero.value);
    let decimal = parseFloat(decimales.value);
    if (!num || !decimal) {
      throw "No se ha introducido un numero en alguno de los inputs";
    }
    if (decimal < 0) {
      throw "No se pueden poner decimales negativos";
    }
    if (decimal > 100) {
      throw "No se pueden poner decimales mayores que 100";
    }
    result = num.toExponential(decimal);
    numero.style = "background-color:white";
    decimales.style = "background-color:white";
  } catch (error) {
    result = error;
    numero.style = "background-color:red";
    decimales.style = "background-color:red";
  } finally {
    resultado.innerHTML = result;
    numero.value="";
    decimales.value="";
  }
}
