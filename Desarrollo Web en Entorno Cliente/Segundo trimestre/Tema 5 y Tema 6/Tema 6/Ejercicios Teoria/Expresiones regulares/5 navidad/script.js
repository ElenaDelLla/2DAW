const lista = ["3ESO-C,3ESO-A,2ESO-C,1ESO-B,1ESO-C,1ESO-D,1BAC-A,1BAC-B,1BAC-C,2BAC-A,2BAC-B"];
const patron = /\b[0-9]ESO\-/g;
const patron1ESO = /\b1ESO\-/g;
let contador = 0;
let contadorESO = 0;

Array.from(lista).forEach((elem) => {
    let resultado = elem.match(patron);
    if (resultado) {
        contador += resultado.length;
    }
     
    let resul1ESO = elem.match(patron1ESO);
    resul1ESO.forEach(()=>{
        if(resul1ESO){
            contadorESO++;
        }
    });
    
    mostrar.innerHTML = `El número de grupos de ESO es ${contador} y el número de grupos de 1ºESO es ${contadorESO}`;
});
