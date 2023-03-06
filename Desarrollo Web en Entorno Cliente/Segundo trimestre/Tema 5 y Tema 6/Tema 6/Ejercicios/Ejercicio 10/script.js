const boton =  document.getElementById("comprobar");

boton.addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    const patron = /^[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{3}$/g; 
    let resul = patron.test(texto);
    resultado.innerHTML = `Los datos introducidos son ${resul ? "correctos" : "incorrectos"}`;
});