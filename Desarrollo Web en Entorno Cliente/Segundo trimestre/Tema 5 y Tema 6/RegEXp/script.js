const boton = document.getElementById("buscar");

boton.addEventListener("click", () => {
  mostrar.innerHTML = "";
  const textoIntroducido = document.getElementById("texto").value;
  const textoBuscar = document.getElementById("textoBuscar").value;
  const patron = new RegExp(textoBuscar, "ig");
  const resultado = textoIntroducido.match(patron);
  resultado.forEach((palabra) => {
    mostrar.innerHTML += palabra + "<br>";
  });
});
