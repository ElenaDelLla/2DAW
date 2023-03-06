const inputnombre = document.getElementById("nombre");
const inputedad = document.getElementById("edad");
const inputId = document.getElementById("indice");
const botonCargar = document.getElementById("cargar");
const botonListar = document.getElementById("listar");
const botonAnyadirAlAlmacen = document.getElementById("anyadir");
const botonBorrarElemento = document.getElementById("borrar");
const botonVer = document.getElementById("ver");

let bd;
let nombreBD = "bbdd";
let nombreAlmacen = "nombreAlmacen";

botonCargar.addEventListener("click", () => {
  const peticion = indexedDB.open(nombreBD, 1);
  peticion.addEventListener("upgradeneeded", function (event) {
    bd = event.target.result;
    bd.createObjectStore(nombreAlmacen, { autoIncrement: true });
  });
  peticion.addEventListener("success", function (e) {
    bd = e.target.result;
  });
});

botonListar.addEventListener("click", () => {
  let transac = bd.transaction(nombreAlmacen, "readonly");
  let almacen = transac.objectStore(nombreAlmacen);
  // Con cursor
  let petCursor = almacen.openCursor();

  petCursor.addEventListener("success", (event) => {
    let cursor = event.target.result;
    if (cursor) {
      const elemento = cursor.value;
      // Pintar elemento
      console.log(elemento);
      cursor.continue();
    }
  });
  /* Con getAll
  const peticionGetAll = almacenAlumnos.getAll();

  peticionGetAll.addEventListener("success", (e) => {
    const arrayValores = e.target.result;
    // valores = array de elementos del almacen
    arrayValores.forEach((item) => {
      console.log(item);
    });
  });*/
});

botonAnyadirAlAlmacen.addEventListener("click", () => {
  const transaccion = bd.transaction(nombreAlmacen, "readwrite");
  const almacen = transaccion.objectStore(nombreAlmacen);
  // Objeto que vamos a añadir al almacen
  const registro = { nombre: inputnombre.value, edad: inputedad.value };
  almacen.add(registro);
});

botonBorrarElemento.addEventListener("click", () => {
  let transac = bd.transaction(nombreAlmacen, "readwrite");
  let almacen = transac.objectStore(nombreAlmacen);
  almacen.delete(parseInt(inputId.value));
});

botonVer.addEventListener("click", () => {
  let transac = bd.transaction(nombreAlmacen, "readwrite");
  let almacen = transac.objectStore(nombreAlmacen);
  let ordenLect = almacen.get(parseInt(inputId.value));

  ordenLect.addEventListener("success", (event) => {
    let datoLeido = event.target.result;
    if (datoLeido) {
      console.log(datoLeido);
    } else {
      // No existe ningún dato con esa clave;
    }
  });
});
