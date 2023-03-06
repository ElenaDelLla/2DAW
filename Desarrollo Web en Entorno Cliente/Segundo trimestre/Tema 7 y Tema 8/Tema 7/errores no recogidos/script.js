window.addEventListener('unhandledrejection', function(e) {
    demo.innerHTML+="unhandledrejection: "+e.reason;
    })
    fetch(url)
    .then(response=>response.text())
    .then(data=>demo.innerHTML+="La respuesta es: "+data) 