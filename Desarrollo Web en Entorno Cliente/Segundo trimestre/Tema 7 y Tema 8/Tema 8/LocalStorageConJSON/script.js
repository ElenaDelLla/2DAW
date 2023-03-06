const inputNombre = document.getElementById("nombre");
const inputClave = document.getElementById("clave");
const botonGuardar = document.getElementById("guardar");
const botonVerDatos = document.getElementById("ver");
const botonBorrar = document.getElementById("borrar");

if (typeof localStorage !== "undefined") {
  botonGuardar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const clave = inputClave.value;
    const valores = localStorage.getItem("array"); // Recuperamos lo que hay en el array para poder añadir
    let array = JSON.parse(valores);
    
    if (!array) {
      array = [];
    }
    const obj = {
      nombre: nombre,
      clave: clave,
    };
    array.push(obj); //Añade al final
    localStorage.setItem("array", JSON.stringify(array));
  });

  botonVerDatos.addEventListener("click", () => {
      let valores = localStorage.getItem("array");
      let array = JSON.parse(valores);

      array.forEach((element) => {
        mostrar.innerHTML += `Nombre: ${element.nombre}<br> Clave: ${element.clave} <br>`;
      });
  });

  botonBorrar.addEventListener("click", () => {
    let valores = localStorage.getItem("array");
    let array = JSON.parse(valores);
    let nuevoArray = [];
    for (let index = 0; index < array.length; index++) {
      if (array[index].nombre !== inputNombre.value) {
        nuevoArray.push(array[index]);
      }
    }
    localStorage.setItem("array", JSON.stringify(nuevoArray));
  });
  
} else {
  mostrar.innerHTML = "El navegador no soporta LocalStorage";
}
