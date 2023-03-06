Repite el ejercicio 6, pero utilizando el método POST. Para ello necesitas saber lo siguiente:
 Se indica el tipo de método en open: XHR.open('POST', "procesar.php", true);
 Tenemos que crear una cabecera con el tipo de contenido que vamos a enviar, justo antes de
enviar la petición con el método .send():
XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 En el método .send() escribiremos los parámetros que serán enviados por el método POST:
XHR.send(parámetros)
El fichero PHP no es necesario modificarlo si recoge el parámetro con $_REQUEST: $nombre = $_REQUEST["nombre"];