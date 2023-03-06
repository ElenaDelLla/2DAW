# Ejercicio 4

Crea un programa HTML con los siguientes elementos:
1. Un div con identificador “demo”.
2. Un botón llamado “Temperatura y sensación térmica de los últimos días por franjas
horarias”. De forma que cuando se pulse, se pida un fichero XML que facilitará a
nuestro programa HTML estos datos. Ese fichero XML se pide a través de la URL:
"https://api.openweathermap.org/data/2.5/forecast?
q=Madrid,es&lang=es&units=metric&mode=xml&appid=479092b77bcf850403cb2aeb1
a302425" con el método GET.
Lo que se tiene que mostrar por pantalla son frases como la siguiente para cada día y franja horaria
facilitada en el fichero XML:
Dia 2021-02-26 desde las 18:00 hasta las 21:00 : Temperatura -> 13 Sensacion térmica -> 10.02
Visualiza previamente este fichero XML para poder conocer su estructura y así poder
acceder a sus datos desde JavaScript.