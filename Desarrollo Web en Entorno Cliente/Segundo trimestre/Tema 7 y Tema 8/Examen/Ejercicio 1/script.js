const inputModulos = document.getElementById("modulos");
const inputNotas = document.getElementById("notas");
const inputEvaluaciones = document.getElementById("evaluaciones");
const inputId = document.getElementById("indice");
const botonCargar = document.getElementById("cargarBD");
const botonNotasSuspensas = document.getElementById("notasSuspensas");
const pMostrar = document.getElementById("mostrar");

let bd;
let nombreBD = "bbddNotas";
let nombreAlmacen = "calificaciones";

function cargarNotas() {
  const transaccion = bd.transaction(nombreAlmacen, "readwrite");
  const almacen = transaccion.objectStore(nombreAlmacen);
  pMostrar.innerHTML = "";
  if (inputModulos.value && inputNotas.value && inputEvaluaciones.value) {
    const modulos = inputModulos.value.split(",");
    const notas = inputNotas.value.split(",");
    const evaluaciones = inputEvaluaciones.value.split(",");

    if (notas.length === modulos.length && notas.length === evaluaciones.length) {
      notas.forEach((nota, index) => {
        const registro = {
          nota: nota,
          modulo: modulos[index],
          evaluacion: evaluaciones[index],
        };
        almacen.add(registro);
      });
    } else {
      pMostrar.innerHTML = "Se debe introducir el mismo numero de elementos en cada input, separados por comas";  
    }
  } else {
    pMostrar.innerHTML = "Es obligatorio rellenar todos los campos";
  }
}

botonCargar.addEventListener("click", () => {
  const peticion = indexedDB.open(nombreBD, 1);
  peticion.addEventListener("upgradeneeded", function (event) {
    bd = event.target.result;
    bd.createObjectStore(nombreAlmacen, { autoIncrement: true });
  });
  peticion.addEventListener("success", function (event) {
    bd = event.target.result;
    cargarNotas();
  });
});

botonNotasSuspensas.addEventListener("click", () => {
  const peticion = indexedDB.open(nombreBD, 1);
  peticion.addEventListener("success", function (event) {
    bd = event.target.result;
    let transac = bd.transaction(nombreAlmacen, "readonly");
    let almacen = transac.objectStore(nombreAlmacen);

    let petCursor = almacen.openCursor();
    pMostrar.innerHTML = "";
    petCursor.addEventListener("success", (event) => {
      let cursor = event.target.result;
      if (cursor) {
        const item = cursor.value;
        const key = cursor.key;
        const nota = item.nota;
        const modulo = item.modulo;
        const evaluacion = item.evaluacion;
        if (nota < 5) {
          pMostrar.innerHTML += `${key}:nota=${nota} ev=${evaluacion} modulo=${modulo} <br/>`;
        }
        cursor.continue();
      }
    });
  });
});
