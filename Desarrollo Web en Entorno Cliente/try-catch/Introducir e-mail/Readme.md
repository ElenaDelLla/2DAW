# Introducir e-mail sin expresiones regulares

Crea una página web que tenga los siguientes elementos:
• 1 input de tipo texto con una etiqueta llamada email
• 1 input de tipo texto con una etiqueta llamada Confirmación email
• 1 input de tipo botón llamado “Comprobar”
• 1 párrafo.
Utilizando try-catch-finally-throw y también los constructores de throw crea la función que se va a
ejecutar al presionar el botón “Comprobar”. 
De forma que:
1. Si el usuario no completa los inputs salga en el párrafo un mensaje de error y el color de fondo
de los inputs tipo texto cambia a rojo.
2. Si el usuario no introduce dos emails iguales salga en el párrafo un mensaje de error y el color
de fondo de los inputs tipo texto cambia a rojo.
3. Si el usuario no introduce un email correcto salga en el párrafo un mensaje de error y el color de
fondo de los inputs cambia a rojo. Para que un email sea correcto tiene que cumplir:
a) Debe tener el carácter @
b) Después del carácter @ debe haber al menos un carácter “.”
4. Si el usuario introduce todos los datos correctamente, salga en el párrafo un mensaje indicando
la dirección del email introducido, que es correcta y el color de fondo de los inputs cambia a
blanco.
5. Siempre se ha de borrar el contenido de los inputs.