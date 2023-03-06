# Ejercicio 8 Promise

Utilizando fetch()-GET y recibir datos en JSON.

En este ejercicio vamos a obtener los datos de unos héroes de un fichero JSON. Este fichero JSON
nos lo van a servir desde la URL:
'https://mdn.github.io/learning-area/javascript/oojs/json/superher
oes.json
Para realizar la petición de este fichero JSON, lo vamos a hacer mediante Ajax, haciendo uso del
objeto XMLHttpRequest (XHR).
El contenido de este fichero JSON, lo vamos a recibir concretamente en la propiedad
responseText del objeto XHR, es decir, en formato cadena.
Esta respuesta tipo cadena tenemos que pasarla a objeto JSON (que son objetos de JavaScript
literales) mediante el método JSON.parse(xhr.responseText). JSON es un objeto de
JavaScript parecido a Math.
 Una vez recibido el fichero JSON que necesitamos vamos a mostrar los datos
recibidos de la siguiente forma:
 Haremos uso del fichero ej8UT7heroes.css que hay publicado en el aula
virtual. Este fichero no puede ser modificado.
 Haremos uso del fichero ej8UT7heroes.html que hay publicado en el aula
virtual. Este fichero no puede ser modificado
 En la parte de JavaScript del fichero ej8UT7heroes.js se creará lo siguiente una
vez recibidos los datos JSON:
o En el <body> se creará lo siguiente:
 un elemento HTML tipo <header>. Dentro de este <header> se
crearán los siguientes elementos:
 Un elemento <h1> que contendrá el dato squadName que
obtendremos del fichero JSON.
 Un elemento <p> que contendrá lo siguiente en una sola
línea:
o El literal “Hometown: “
o El dato homeTown que obtendremos del fichero
JSON.
o El literal “// Formed: “
o El dato formed que obtendremos del fichero JSON.
 Un elemento HTML tipo <section>. Dentro de este elemento
<section> crearemos tantos elementos HTML <article>
como miembros de héroes haya. Cada <article> tendrá la
siguiente estructura:
 Un elemento <h2> que contendrá el datos name del
superhéroe.
 Un elemento <p> que contendrá lo siguiente:
o El literal “Secret identity: “
o El dato secretIdentity que obtendremos del
JSON.
 Otro segundo elemento <p> que contendrá lo siguiente:
o El literal “Age: “
o El dato age que obtendremos del JSON.
 Un tercer elemento <p> que contendrá el literal
“Superpowers”
 Un elemento HTML lista <ul>, que contendrán tantos
elementos ítems de la lista <li> como superpoderes tengan el
superhéroe. Cada <li> de la lista contendrá el dato Powers
que obtendremos del fichero JSON.
Un ejemplo de lo que se tiene que visualizar es lo siguiente (los estilos ya están programados en
 la hoja ej8UT7heroes.css)