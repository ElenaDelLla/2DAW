const peticion = indexedDB.open("Nueva","2");

peticion.addEventListener("success", (event) => {
    resultado.innerHTML += `Success ${event.target.result}<br>`;
});

peticion.addEventListener("upgradeneeded", (event) => {
    resultado.innerHTML += `Upgradeneeded ${event.target.result}<br>`;
});