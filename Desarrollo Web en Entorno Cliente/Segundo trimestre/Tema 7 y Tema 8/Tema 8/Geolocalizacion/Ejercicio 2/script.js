const botonMostrar = document.getElementById("mostrar");
const botonMostraMapa = document.getElementById("mapa");

botonMostrar.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(fPosition,fError)
  function fPosition(posicion) {
    resultado.innerHTML = `Longitud: ${posicion.longitude}<br> Latitud: ${posicion.latitude}`;
  }
  function fError(error) {
    errores.innerHTML =
      error.message +
      error.code +
      error.PERMISSION_DENIED +
      error.POSITION_UNAVAILABLE +
      error.TIMEOUT +
      error.UNKNOWN_ERROR;
  }
});

botonMostraMapa.addEventListener("click", () => {
  const coord = { lat: 1, lng: 3 }; //han de ser números
  const map = new google.maps.Map(mapa, {
    zoom: 10,
    center: coord,
  });

  //Marcar ubicacion 
  const marker = new google.maps.Marker({
    position: coord,
    map: map
    });
});
