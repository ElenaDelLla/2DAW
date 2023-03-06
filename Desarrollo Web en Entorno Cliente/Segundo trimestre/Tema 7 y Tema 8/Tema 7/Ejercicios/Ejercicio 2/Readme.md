# Ejercicio 2

Modifica el programa anterior para que cuando el estado de la petición XMLHttpRequest
(propiedad readyState) muestre ese estado en el div “demo” siguiendo este esquema:
1. readyState = 1-> muestre el texto “Conexión establecida con el servidor”
2. readyState = 2 -> muestre el texto “El servidor ha recibido la petición”
3. readyState = 3 -> muestre el texto “El servidor está procesando la petición”,
4. readyState = 4 -> muestre el texto “Respuesta recibida del servidor”. Y evalúe si la
respuesta es correcta, y sino lo es por qué. 