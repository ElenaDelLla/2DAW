const botonCrearLeerBD = document.getElementById("crearLeer");
const botonCerrarBD = document.getElementById("cerrarBD");
const botonBorrarBD = document.getElementById("borrarBD");
const botonCrearAlmacen = document.getElementById("crearAlmacen");
const botonAdd = document.getElementById("add");
const botonLeerAlumno = document.getElementById("leerAlumno");
const botonActualizar = document.getElementById("actualizar");
const botonBorrar = document.getElementById("borrar");
const botonRecorrer = document.getElementById("recorrer");
let version = 1;
let nombre = "p";
let bd;

botonCrearLeerBD.addEventListener("click", () => {
  let peticion = indexedDB.open(nombre, version); //es la orden

  peticion.addEventListener("upgradeneeded", function (e) {
    //mostrar.innerHTML += "Upgradeneeded:" + e.target.result;
    bd = e.target.result;
  });

  peticion.addEventListener("success", (e) => {
    //aquí ya se que existe la base de datos por lo que opero dentro
    //mostrar.innerHTML += "<br>Success:" + e.target.result;
    bd = e.target.result;
  });
});

botonCerrarBD.addEventListener("click", () => {
  bd.close(nombre);
});

botonBorrarBD.addEventListener("click", () => {
  bd.close(nombre);
  var peticion = indexedDB.deleteDatabase(nombre);

  peticion.addEventListener("success", function (e) {
    mostar.innerHTML += ("La BD se borro exitosamente");
  });

  peticion.addEventListener("error", function (e) {
    mostar.innerHTML += ("No se pudo eliminar la BD");
  });
});

botonCrearAlmacen.addEventListener("click", () => {
  //creación de la tabla
  bd.close(nombre);
  version++;
  let peticion = indexedDB.open(nombre, version);

  peticion.addEventListener("upgradeneeded", function (e) {
    demo.innerHTML += "<br>BD actualizado para crear almacen";
    bd = e.target.result;
    bd.createObjectStore("alumnos", { autoIncrement: true });
  });
});

botonAdd.addEventListener("click", function () {
  let trans = bd.transacion("alumnos", "readwrite");

  let almacenAlumnos = trans.createObjectStore("alumnos");
});

botonCrearAlmacen.addEventListener("click", () => {
  //creación de la tabla
  bd.close(nombre);
  version++;
  let peticion = indexedDB.open(nombre, version);

  peticion.addEventListener("upgradeneeded", function (e) {
    demo.innerHTML += "<br>BD actualizado para crear almacen";
    bd = e.target.result;
    bd.createObjectStore("alumnos", { autoIncrement: true });
  });
});

botonLeerAlumno.addEventListener("click", () => {
  const valorInputIndice = document.getElementById("indice").value;
  const indiceNum = parseInt(valorInputIndice);
  const transac = bd.transaction("alumnos", "readonly");
  const almacenAlumnos = transac.objectStore("alumnos");
  transac.addEventListener("complete", () => {
    mostar.innerHTML += ("Transacción ok");
  });
  transac.addEventListener("error", () => {
    mostar.innerHTML += ("Transacción nok");
  });
  const ordenLect = almacenAlumnos.get(indiceNum);
  ordenLect.addEventListener("success", (event) => {
    const datoLeido = event.target.result;
    if (datoLeido) {
        mostar.innerHTML += (datoLeido);
    } else {
        mostar.innerHTML += (`No existe ningundato clave ${indiceNum}`);
    }
    ordenLect.addEventListener("error", () => {
        mostar.innerHTML += ("Error de lectura");
    });
  });
});

botonActualizar.addEventListener("click", () => {
  const transac = bd.transaction("alumnos", "readwrite");
  const almacenAlumnos = transac.objectStore("alumnos");
  transac.addEventListener("complete", () => {
    mostar.innerHTML += ("Transacción ok");
  });
  transac.addEventListener("error", () => {
    mostar.innerHTML += ("Transacción nok");
  });
  const registro = { nombre: nombre.value, edad: edad.value };
  const petAct = almacenAlumnos.put(registro, parseInt(indice.value));
  petAct.addEventListener("success", () => {
    mostar.innerHTML += ("Dato actualizado");
  });
  petAct.addEventListener("error", () => {
    mostar.innerHTML += ("Error en la actualización");
  });
});

botonBorrar.addEventListener("click", () => {
  const valorInputIndice = document.getElementById("indice").value;
  let transac = bd.transaction("alumnos", "readwrite"); //Creamos la transaccion
  const almacenAlumnos = transac.objectStore("alumnos"); //Obtenemos la referecia al almacen
  transac.addEventListener("complete", () => {
    mostar.innerHTML += ("transacción ok");
  });
  transac.addEventListener("error", () => {
    mostar.innerHTML += ("transacción NOK");
  });
  const petDel = almacenAlumnos.delete(valorInputIndice); //borramos el dato con clave del input
  petDel.addEventListener("success", () => {
    mostar.innerHTML += ("borrado ok");
  });
  petDel.addEventListener("error", () => {
    mostar.innerHTML += ("borrado NOK");
  });
});

botonRecorrer.addEventListener("click", () => {
  const transac = bd.transaction("alumnos", "readonly");
  const almacenAlumnos = transac.objectStore("alumnos");
  transac.addEventListener("complete", () => {
    mostar.innerHTML += ("transacción ok");
  });
  transac.addEventListener("error", () => {
    mostar.innerHTML += ("transacción NOK");
  });
  const petGetAll = almacenAlumnos.getAll();
  petGetAll.addEventListener("error", () => { //Obtenemos los objetos
    mostar.innerHTML += ("GetAll NOK");
  });

  petGetAll.addEventListener("success", (event) => {
    let valores = event.target.result;
    if (valores) {
      valores.forEach((item) => { // Por cada objeto del almacen
        if (valores.length == 0) {
            mostar.innerHTML += ("No hay valores en el almacen");
        }
      });
    }
  });
});
