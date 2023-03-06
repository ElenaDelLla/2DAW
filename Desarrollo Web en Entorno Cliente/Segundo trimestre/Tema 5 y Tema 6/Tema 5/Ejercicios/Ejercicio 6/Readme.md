# Ejercicio 6

Crea una nueva página HTML, con un párrafo como éste:
   <p id=”demo”>Parrafo creado en HTML.</p>

En este ejercicio vamos a crear un nuevo elemento HTML “p” y todos sus nodos hijos (elementos y textos) utilizando createElement(), createTextNode() appendChild()

Y con un botón llamado “Crear parrafo”, que al pulsarlo cree el siguiente párrafo desde JavaScript de la siguiente forma:
    ◦ Cree 3 elementos: p, b y br.
    ◦ Crear al elemento p el atributo title “Parrafo creado desde JavaScript”.
    ◦ Crear los siguientes 4 textos:
        1. Con JavaScript se
        2. pueden realizar
        3. un montón
        4. de cosas sobre el documento.
    ◦ Se asigna al elemento b los siguientes nodos hijos y por este orden: 
        ▪ El texto 2 (pueden realizar).
        ▪ El elemento br creado al principio.
        ▪ El texto 3 (un montón).
    ◦ Se asigna al elemento p los siguientes nodos hijos y por este orden: 
        ▪ El texto 1 (Con JavaScript se).
        ▪ El elemento b anterior.
        ▪ El texto 4 (de cosas sobre el documento).
    ◦ Asigna al elemento párrafo demo el elemento p que has creado. 
    
    ¿Qué resultado da? Dibuja el árbol DOM