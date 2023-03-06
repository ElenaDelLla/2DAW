# Ejercicio 11 - Promise

Utilizando fetch()-POST y enviando datos en string (clave=valor&clave2=valor2)

Crea un programa HTML con los siguientes elementos:
1. Un div con identificador “demo”.
2. Un formulario con:
1. Un input tipo texto para meter un Nombre de persona.
2. Un botón llamado “Comprobar nombre” de forma que cada vez que se haga click en
él se ejecute un programa php. Este programa php funcionará de la siguiente forma:
1. Se ejecuta con el método GET.
2. Recibirá una variable llamada nombre.
3. El valor de esta variable será lo introducido por el usuario en el input tipo texto.
4. Este programa php tendrá dentro un array con varios nombres de personas.
5. Si el dato que le llega a través de la variable nombre es igual a uno de estos
nombres, el programa php devolverá OK, y si no es así devolverá NOK.
NOTA: El fichero PHP está disponible en el aula virtual.
3. Cuando se ejecute el programa php, si éste devuelve OK aparecerá en el div “Este
nombre existe en el servidor”, y si devuelve NOK aparecerá en el div “Este nombre
no existe en el servidor.