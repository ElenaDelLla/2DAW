function mostrarCoordenadas(elEvento) {
    if(elEvento.ctrlKey === "CTRL"){
        document.getElementById("coordenadas").innerHTML =
      "client X-Y " +
      elEvento.clientX +
      " : " +
      elEvento.clientY +
      " event.target.id: " +
      event.target.id +
      "<br>";
    
    document.getElementById("coordenadas").innerHTML +=
      "offset X-Y " +
      elEvento.offsetX +
      " : " +
      elEvento.offsetY +
      " event.target.id: " +
      elEvento.target.id +
      "<br>";
    document.getElementById("coordenadas").innerHTML +=
      "page   X-Y " +
      elEvento.pageX +
      " : " +
      elEvento.pageY +
      " event.target.id: " +
      event.target.id +
      "<br>";
    document.getElementById("coordenadas").innerHTML +=
      "screen X-Y " +
      elEvento.screenX +
      " : " +
      elEvento.screenY +
      " event.target.id: " +
      event.target.id +
      "<br>";
  }
}

  document.addEventListener("mousemove", mostrarCoordenadas, false);