const select = document.getElementById("tipoLetra");
const colorInput = document.getElementById("color");
const textarea = document.getElementById("texto");

if(localStorage){
    const tipoLetra = localStorage.getItem("tipoLetra");
    const color = localStorage.getItem("color");
    if(tipoLetra){
        textarea.style.fontFamily = JSON.parse(tipoLetra).valor;
        select.value = JSON.parse(tipoLetra).valor
    }
    if(color){
        textarea.style.fontFamily = JSON.parse(color).valor;
        colorInput.value = JSON.parse(color).valor;
    }
}

select.addEventListener("change", () => {
    if(typeof(Storage) !== "undefined"){
        const tipoLetra={
            valor: select.value
        };
        localStorage.setItem("tipoLetra", JSON.stringify(tipoLetra));
        textarea.style.fontFamily= select.value;
    }else{
        mostrar.innerHTML = "El navegador no soporta localStorage";
    }
});

colorInput.addEventListener("change", () => {
    if(typeof(Storage) !== "undefined"){
        const color = {
            valor: colorInput.value
        };
        localStorage.setItem("color", JSON.stringify(color));
        textarea.style.fontFamily= colorInput.value;

    }else{
        mostrar.innerHTML = "El navegador no soporta localStorage";
    }
});

// Guardando los dos campos en un mismo JSON: 

/*const select = document.getElementById("tipoLetra");
const inputColor = document.getElementById("color");
const textarea = document.getElementById("texto");

if (typeof localStorage !== "undefined") {
  if (localStorage) {
    const valores = JSON.parse(localStorage.getItem("valores"));
    if (valores && valores.tipoLetra && valores.color) {
      textarea.style.fontFamily = valores.tipoLetra;
      textarea.style.color = valores.color;
    } else {
      textarea.style.fontFamily = select.value;
      textarea.style.color = inputColor.value;
      const obj = {
        tipoLetra: select.value,
        color: inputColor.value,
      };
      localStorage.setItem("valores", JSON.stringify(obj));
    }
  }

  function guardar() {
    demo.innerHTML = "";
    const obj = {
      tipoLetra: select.value,
      color: inputColor.value,
    };
    localStorage.setItem("valores", JSON.stringify(obj));
    textarea.style.fontFamily = select.value;
    textarea.style.color = inputColor.value;
  }
  select.addEventListener("change", guardar);
  inputColor.addEventListener("change", guardar);
} else {
  demo.innerHTML = "El navegador no soporta LocalStorage";
}*/