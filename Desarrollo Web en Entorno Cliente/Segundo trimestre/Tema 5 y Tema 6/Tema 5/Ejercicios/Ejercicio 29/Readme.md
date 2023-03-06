# Ejercicio 29

Incorpora este código HTML a una página web.
<form name="formulario" id="formulario">
           <label for="nombre">Nombre:</label>
           <input type="text" id="nombre" name="nombre" />
           <label for="apellidos">Apellidos:</label>
           <input type="text" id="apellidos" name="apellidos" />
           <label for="provincia">Provincia:</label>
           <input type="text" id="provincia" name="provincia" />
           <input type="button" id="enviar" value="Enviar" />
</form>

Programa el código JavaScript para que pulsar la tecla Intro dentro de cualquiera de los inputs se mueva el foco al input siguiente incluyendo el botón. 
Recorre los nodos del formulario utilizando el método nextSibling()
Al llegar al final del formulario (el botón) se debe pasar el foco al primer input del formulario.