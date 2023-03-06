avisar.addEventListener('click', avisar_fn);
function avisar_fn(){
    alert(`Se va a abrir una página muy pesada ${this.href}`);
}