function resolver_decimales() {
      if (!numero.value || !decimales.value) {
        numero.style = "background-color:blue";
        decimales.style = "background-color:blue";
        resultado.innerHTML = "No se ha introducido alguno de los inputs";
      }else {
        let num = parseFloat(numero.value);
        let decimal = parseFloat(decimales.value);
      if (!num || !decimal) {
        numero.style = "background-color:grey";
        decimales.style = "background-color:grey";
        resultado.innerHTML = "No se ha introducido un numero en alguno de los inputs";
      }else if (decimal < 0) {
        numero.style = "background-color:red";
        decimales.style = "background-color:red";
        resultado.innerHTML = "No se pueden poner decimales negativos";
      }else if (decimal > 100) {
        numero.style = "background-color:yellow";
        decimales.style = "background-color:yellow";
        resultado.innerHTML =  "No se pueden poner decimales mayores que 100";
      }else{
        result = num.toExponential(decimal);
        numero.style = "background-color:white";
        decimales.style = "background-color:white";
      }
      numero.value="";
      decimales.value="";
      }
    }