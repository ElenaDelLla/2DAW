let colorActual;
let pintando = false;

const anchoTablero = 30;
const altoTablero = 30;

const pintaTableroBlanco = () => {
  const zonaDibujo = document.getElementById("zonadibujo");
  const tablerodibujo = document.createElement("table");
  tablerodibujo.setAttribute("border", "1px");
  tablerodibujo.classList.add("tablerodibujo");

  for (let numFila = 0; numFila < anchoTablero; numFila++) {
    const tr = document.createElement("tr");
    for (let numColumna = 0; numColumna < altoTablero; numColumna++) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    tablerodibujo.appendChild(tr);
  }
  zonaDibujo.appendChild(tablerodibujo);
};

const cambiaTextoEstado = () => {
  const estado = document.getElementById("pincel");
  if (colorActual) {
    estado.innerHTML = "PINCEL ACTIVO";
  } else {
    estado.innerHTML = "PINCEL DESACTIVADO";
  }
};

const cambiarColor = (colorSeleccionado) => {
  const elementoColorActual = document.getElementsByClassName("seleccionado")[0];

  if (elementoColorActual) {
    elementoColorActual.classList.remove("seleccionado");
  }

  if (colorActual !== colorSeleccionado) {
    const elementoNuevoColor = document.getElementsByClassName(colorSeleccionado)[0];
    elementoNuevoColor.classList.add("seleccionado");
    colorActual = colorSeleccionado;
  } else {
    colorActual = "";
  }

  cambiaTextoEstado();
};

const addEventosCambiarColor = () => {
  const color1 = document.getElementsByClassName("color1")[0];
  const color2 = document.getElementsByClassName("color2")[0];
  const color3 = document.getElementsByClassName("color3")[0];
  const color4 = document.getElementsByClassName("color4")[0];
  const color5 = document.getElementsByClassName("color5")[0];
  const color6 = document.getElementsByClassName("color6")[0];

  color1.addEventListener("click", () => cambiarColor("color1"));
  color2.addEventListener("click", () => cambiarColor("color2"));
  color3.addEventListener("click", () => cambiarColor("color3"));
  color4.addEventListener("click", () => cambiarColor("color4"));
  color5.addEventListener("click", () => cambiarColor("color5"));
  color6.addEventListener("click", () => cambiarColor("color6"));
};

const addEventoPintado = () => {
  const table = document.getElementById("zonadibujo").getElementsByTagName("table")[0];
  for (let i = 0; i <= anchoTablero-1; i++) {
    for (let j = 0; j <= altoTablero-1; j++) {
      const celda = table.rows[i].cells[j];

      // Cuando se hace clic en una celda, se establece su color y se inicia/para el
      // modo de pintado
      celda.addEventListener("click", () => {
        if (colorActual) {
          celda.classList.value = colorActual;
          pintando = !pintando;
        }
      });

      // Cuando se mueve el ratón sobre una celda, si se está en modo de pintado,
      // se establece su color
      celda.addEventListener("mouseover", () => {
        if (colorActual && pintando) {
          celda.classList.value = colorActual;
        }
      });
    }
  }
};

const inicializar = () => {
  pintaTableroBlanco(); // pinta el tablero inicial
  const elementoColorActual = document.getElementsByClassName("seleccionado")[0];
  colorActual = elementoColorActual.classList[0]; // guarda el color inicial
  cambiaTextoEstado(); // actualiza estado de pincel
  addEventosCambiarColor(); // añade funcionalidad de cambiar/desactivar color
  addEventoPintado(); // añade funcionalidad de clicar en celda y hover
};

window.addEventListener("load",inicializar);