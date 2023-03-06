# Ejercicio 10

Partiendo del fichero ej10UT7.html del aula virtual que tiene un formulario con los siguientes
campos:
     Input tipo texto: Nombre.
     Input tipo texto: Apellidos.
     Input tipo select: Comunidad autónoma en la que vive.
     Input tipo select: Provincia en la que vive.
     Un botón llamado “Ver datos introducidos”

El input tipo select para la provincia en la que vive el usuario va a funcionar de la siguiente manera:
     Las opciones se van a construir de forma dinámica en función de la Comunidad
    Autónoma que ha seleccionado el usuario.
     Las provincias de cada Comunidad Autónoma se van a consultar por Ajax a un
    fichero PHP ej10UT7.php (está en el aula virtual) cada vez que el select de la
    Comunidad Autónoma cambie. Este fichero PHP va a devolver las provincias en un
    JSON.
Al pulsar el botón “Ver datos introducidos” se va a visualizar todos los datos que el usuario ha
introducido en el formulario.