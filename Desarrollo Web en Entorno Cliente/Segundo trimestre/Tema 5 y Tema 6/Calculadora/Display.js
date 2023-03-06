class Display {
    constructor(displayelementoAnterior, displayelementoActual){
        this.displayelementoAnterior = displayelementoAnterior;
        this.displayelementoActual = displayelementoActual;
        this.calculadora = new Calculadora();
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperador = undefined;
        this.signos = {
            sumar: "+",
            restar: "-",
            multiplicar: "*",
            dividir: "/",
        };
    }

    aniadirNumero(numero){
        if(this.numero === "." && this.valorActual.include(".")) return; // Si el numero es un punto y ya se ha 
                                                                        // introducido un número antes, no lo añadas
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayelementoActual.textContent = this.valorActual;
        this.displayelementoAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperador] || ""}`;
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    
    borrarTodo(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperador = undefined;
        this.imprimirValores();
    }

    calcular(){ //función para pasarle los datos a la clase calculadora y operar
        this.valorActual = parseFloat(this.valorActual); // Pasamos a float el número para poder operar con el
        this.valorAnterior = parseFloat(this.valorAnterior);

        if(isNaN(this.valorActual) || isNaN(this.valorAnterior)) return;
        else{ // Si ambos son números:
            this.valorActual = this.calculadora[this.tipoOperador](this.valorActual, this.valorAnterior);
            //Busca en el objeto calculadora el operador que se ha marcado 
            //para usar la función adecuada y se le pasa como parámetro los dos valores.
        }

    }

    computar(tipo){
        if(this.tipoOperador !== "igual"){
            this.calcular();
        }
        this.tipoOperador = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior; // No lo entiendo
        this.valorActual = "";
        this.imprimirValores(); 
    }
}