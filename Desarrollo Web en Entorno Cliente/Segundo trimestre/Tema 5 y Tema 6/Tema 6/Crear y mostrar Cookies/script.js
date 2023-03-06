const botonEnviar = document.getElementById("enviar");
const botonConsultar = document.getElementById("consultar");

botonEnviar.addEventListener("click", () => {
    const inputCiclo = document.getElementById("ciclo").value;
    const inputCurso = document.getElementById("curso").value;
    document.cookie = `ciclo=${inputCiclo};`;
    document.cookie = `curso=${inputCurso};`;
});

botonConsultar.addEventListener("click", () => {
    const arrayCookie = document.cookie.split("; ");
    arrayCookie.forEach(cookie => {
        const arrayPartes = cookie.split("=");
        let nombreCookie = arrayPartes[0];
        let valorCookie = arrayPartes[1];
        mostrar.innerHTML += `El nombre de la cookie es: ${nombreCookie} <br>
                                y el valor de la cookie es: ${valorCookie} <br>`;
    });
});