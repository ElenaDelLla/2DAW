# Cargador de noticias

RSS: Suscribir a las noticias que que queramos o bien bajas a mano los XML y los alojas en tu servidor web.
Has de conseguir de 4 a 6 RSS, dos opciones:
De los RSS se va a usar al menos los siguientes datos de cada noticias:
    Title
    Description
    pubDate
    Content
La aplicación va a tener un array de JSON. Cada JSON será un RSS. Este JSON va a tener los siguientes campos:
    idCanal
    nombreCanal
    URLCanal (o bien la real o del servidor)

Botón de cargar que se encarga de (en linea):
    Crear la BD
    Crear un almacén de objetos por cada RSS del array de JSON. El nombre del almacén lo puedes sacar del Campo idCanal.
    Cargar las noticias de cada canal en su almacén correspondiente.
Parte de leer/operar con las noticias (offline). Para ello tendremos:
    Un select --> Para elegir canal que se construirá automáticamente a partir del array.
    Input tipo number para indicar la clave de la noticia.
    Botón de listar todos los títulos del canal seleccionado en el select con las claves.
    Botón de borrar la noticia indicada en el input de clave del canal seleccionado en el select.
    Botón ver noticia para ver la noticia indicada en el select.

