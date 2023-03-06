fetch("noexiste.php")
.then(response=>response.text())
.then(data=>demo.innerHTML+="La respuesta es: "+data)
.catch(respuesta=>demo.innerHTML+="En el catch:"+respuesta)