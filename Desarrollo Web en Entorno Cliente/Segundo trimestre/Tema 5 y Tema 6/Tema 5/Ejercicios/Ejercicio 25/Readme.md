# Ejercicio 25

Crea un programa HTML con lo siguiente:
1. Un botón y un enlace.
2. Se deben capturar los eventos load de la ventana, click del enlace, y click del botón, asociándoles la función esCancelable().
3. Esta función va a hacer lo siguiente:
    a) Sacar por pantalla en qué elemento se ha producido el evento (utiliza this).
    b) Sacar por pantalla si ese evento es cancelable o no (utiliza la propiedad cancelable de los eventos)
    c) Intentar cancelar la acción por defecto (utiliza preventDefault())