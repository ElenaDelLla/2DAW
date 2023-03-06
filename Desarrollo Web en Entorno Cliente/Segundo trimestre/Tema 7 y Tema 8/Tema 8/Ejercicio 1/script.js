const botonGuardar = document.getElementById("guardar");
const botonVer = document.getElementById("ver");
const botonBorrar = document.getElementById("borrar");

if(typeof(Storage) !== "undefined"){

botonGuardar.addEventListener("click", () => {
    const inputLogin = document.getElementById("login").value;
    const inputClave = document.getElementById("clave").value;

    localStorage.setItem("login", inputLogin);
    localStorage.setItem("clave", inputClave);
});

botonVer.addEventListener("click", () => {
    console.log(localStorage.getItem("login"));
    console.log(localStorage.getItem("clave"));
});

botonBorrar.addEventListener("click", () => {
    localStorage.removeItem("login");
    localStorage.removeItem("clave");
});

}else{
    mostrar.innerHTML = "El navegador no soporta LocalStorage";
}
