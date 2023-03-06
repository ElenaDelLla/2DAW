const version = "1";
let BD;
const botonCrear = document.getElementById("crear");
const botonCerrar = document.getElementById("cerrar");
const botonBorrar = document.getElementById("borrar");

botonCrear.addEventListener("click", () => {
  const peticion = indexedDB.open("nombreDB", version);
  peticion.addEventListener("success", (event) => {
    BD = `Success ${event.target.result}<br>`;
  });

  peticion.addEventListener("upgradeneeded", (event) => {
    BD = `Upgradeneeded ${event.target.result}<br>`;
  });
});

botonCerrar.addEventListener("click", () => {
  BD.close("nombreDB");
});

botonBorrar.addEventListener("click", () => {
  const peticion = indexedDB.deleteDatabase("nombreDB");

  peticion.addEventListener("success", () => {
    console.log("La BD ha sido eliminada correctamente");
  });

  request.addEventListener("error", () => {
    console.log("No se pudo eliminar la BD");
  });
});
