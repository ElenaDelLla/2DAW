const select = document.getElementById("tipoLetra");
const inputColor = document.getElementById("color");
const textarea = document.getElementById("texto");

if(localStorage){
    const tipoLetra = localStorage.getItem("tipoLetra");
    const color = localStorage.getItem("color");
    if(tipoLetra){
        textarea.style.fontFamily = tipoLetra;
        select.value = tipoLetra;
    }
    if(color){
        textarea.style.color = color;
        inputColor.value = color;
    }
}

select.addEventListener("change", () => {
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem("tipoLetra", select.value);
        textarea.style.fontFamily = select.value;
    }else{
        mostrar.innerHTML = "El navegador no soporta localStorage";
    }
});

color.addEventListener("change", () => {
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem("color", inputColor.value);
        textarea.style.color= inputColor.value;
    }else{
        mostrar.innerHTML = "El navegador no soporta localStorage";
    }
});