const lista = ["3ESO-C,3ESO-A,2ESO-C,1ESO-B"];
const patron = /[0-9]ESO(?=-C)/g;

Array.from(lista).forEach(element => {
    let resultado = element.match(patron);
    mostrar.innerHTML += resultado;
});