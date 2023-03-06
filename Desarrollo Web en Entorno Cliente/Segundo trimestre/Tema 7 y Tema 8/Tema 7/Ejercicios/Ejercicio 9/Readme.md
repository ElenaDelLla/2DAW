# Ejercicio 9

Partiendo del fichero ej9UT7.html del aula virtual que tiene un formulario con los siguientes
campos:
     Input tipo texto: Nombre.
     Input tipo texto: Apellidos.
     Input tipo texto para la provincia en la que vive.
     Un botón llamado “Ver datos introducidos”
Cada vez que el usuario teclee una tecla dentro del input tipo texto de la provincia, se va a hacer una
consulta por Ajax al fichero php ej9UT7.php (está en el aula virtual) pasándole el value de este
input hasta el momento tecleado por el usuario. Este fichero php va a contener en un array todas las
provincias de España, y va a devolver al cliente la lista de provincias que comienzan con los
caracteres que hay introducidos en el input tipo text de la provincia del formulario

Al pulsar el botón “Ver datos introducidos” se va a visualizar todos los datos que el usuario ha
introducido en el formulario.