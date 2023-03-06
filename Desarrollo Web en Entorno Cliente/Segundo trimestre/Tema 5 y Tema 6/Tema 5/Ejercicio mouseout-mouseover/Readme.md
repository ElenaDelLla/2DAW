# Ejercicio mouseour-mouseover

Partiendo del ejercicio de tabla de botones hacemos lo siguiente y por este orden:
• Quita todos los botones del ejercicio que hay fuera de la tabla.
• Añadimos los identificadores “celda1”, “celda2”, … a todas las celdas (td).
• Añadimos los identificadores “boton1”, “boton2”, … a todos los botones.
• En la etiqueta <style> haz:
• Crea la clase de estilos azul (que ponga el color background en azul).
• Crea la clase de estilos verde (que ponga el color background en verde).
• Pon el estilo background-color a rojo de todas las celdas de la tabla.
• Registramos el evento mouseout y mouseover en todos los botones de la tabla.
• Cuando se produzca el evento mouseout se quita todas las clases que tuviera el elemento
relatedTarget (elemento al que va el ratón) y se le aplica la clase azul. Esto solo se hará
si relatedTarget es una celda (td)
• Cuando se produzca el evento mouseover se quita todas las clases que tuviera el
elemento relatedTarget (elemento del que viene el ratón) y se le aplica la clase verde.
Esto solo se hará si relatedTarget es una celda (td)
• Para saber qué evento exactamente está ocurriendo, indica, cuando se cambie el color
del elemento relatedTarget, los siguientes datos del evento: tipo de evento, el id del
elemento en el que se ha producido el evento, y el id del elemento relatedTarget. 