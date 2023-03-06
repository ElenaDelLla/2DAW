# Ejercicio try-catch-finally-throw

Crea una página web que tenga los siguientes elementos:
• 1 encabezado que ponga “Pasar a notación exponencial”
• 1 input de tipo texto con una etiqueta llamada Número con decimales.
• 1 input de tipo texto con una etiqueta llamada Cantidad de decimales.
• 1 input de tipo botón llamado “Resolver”
• 1 párrafo.
Ejecuta la aplicación poniendo en “Cantidad de decimales” un 120 o un -2.
¿Qué ocurre?
Utiliza try-catch para evitar que el programa se rompa.

Continua con el ejercicio anterior, pero utilizando try-catch-finally-throw y también los constructores de throw crea la función que se va a ejecutar al presionar el botón “Resolver”. De forma que:
1. Si el usuario no completa alguno de los dos inputs salga en el párrafo un mensaje de error y el
color de fondo de los inputs tipo texto cambia a rojo.
2. Si el usuario no introduce un número en alguno de los dos inputs salga en el párrafo el mensaje
de error y el color de fondo de los inputs tipo texto cambia a rojo.
3. Si el usuario introduce una cantidad de decimales negativo salga en el párrafo un mensaje de
error y el color de fondo de los inputs tipo texto cambia a rojo.
4. Si el usuario introduce una cantidad de decimales por encima de 100 salga en el párrafo un
mensaje de error y el color de fondo de los inputs cambia a rojo.
5. Si el usuario introduce todos los datos correctamente, salga en el párrafo un mensaje indicando
el número en notación exponencial y el color de fondo de los inputs cambia a blanco.
6. Siempre se ha de borrar el contenido de los inputs.

**Añade distintos colores a los imputs, segun los distintos errores. Hazlo en otro archivo.
**Haz el mismo ejercicio sin utilizar try-catch-finally-throw. Hazlo en otro archivo