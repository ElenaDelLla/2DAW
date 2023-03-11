# Entrega TEMA 4

# Hecho por Sergio Blázquez García y Elena Delgado Llamas

Añadir un carrusel a la interfaz del escaparate virtual y mejorar el aspecto e interactividad de una interfaz web

## Carrusel

Para añadir un carrusel a nuestra página se han realizado los siguientes pasos:

1. Seleccionamos el elemento con id "contenidoCentro" y le añadimos un nuevo hijo "contenedorCarousel".
2. A dicho "contenedorCarousel" le añadimos como hijo una etiqueta "h1" con el texto "Novedades y promociones"
3. Al mismo nivel que el h1 anterior, añadimos otro div con id carousel, que va a ser el que contenga los diferentes elementos del carrusel.
4. Al elemento "carousel" le añadimos 4 etiquestas "img", que van a ser cada una de las imagenes que tenga nuestro carrusel, cada una de ellas tiene la clase "imagenCarousel" con la que vamos a modificar su posicionamiento, para que todas salgan unas encima de otras, y sólo la primera de ellas sea visible.
5.  Creamos un setInterval que se ejecutara cada 3 segundos que ejecutará la función "siguiente".
6. Dicha funcion siguiente oculta la imagen que actualmente es visible, y muestra la siguiente

## Efecto Scroll

Se ha realizado una animación asociada al scroll de la página, de forma que cuando el usuario vaya bajando sobre la página las imágenes que aparecen en la zona central aumentan su tamaño un 20%. Para ello se ha realizado lo siguiente:

1. Capturamos el evento scroll de la página (window), de forma que cada vez que se capture se lance una función.
2. En dicha función capturamos qué posición tiene cada una de las imágenes y la comparamos con la posición del scroll respecto a la pantalla.
3. Si la imagen está visible en la pantalla le aplicamos una animación de zoom de 1.2 puntos (20%), con una duración de 1 segundo.

## Microinteracciones

Se han realizado las siguientes microinteracciones:

1. Cuando se pasa el ratón sobre una imagen de la zona central se le asigna una clase "fondoImagen", la cual le modifica el color de fondo.
2. Cuando se pasa el raton sobre uno de los botones del menu secundario de la página (el de la zona central) se le asigna una clase que modifica su color de fondo.
3. Cuando se pasa el ratón sobre un enlace del pie de página, se le añade una clase para cambiar el color de dicho enlace.

## Menú flotante

Para hacer que el menu de navegación principal de la página se quede flotando en todo momento se ha realizado lo siguiente:

1. Se captura el evento scroll de window de forma que cuando sobrepase los 80 píxeles se le asigne la clase "menuFixed" al contenedor de dicho menú.
2. En la clase "menuFixed" cambiamos el posicionamiento a position:fixed, con lo cual se va a quedar fijado a la pantalla, además le añadimos un fondo y le modificamos el z-index para que siempre esté por encima de otros contenidos de la página.
3. Para hacerlo más vistoso, se le ha añadido una animación a los botones de la parte izquierda de dicho menú, para ello se ha realizado lo siguiente:
    1. Se añade un div vacío como hermano de cada enlace, dicho div tiene la clase "line".
    2. Dicho div por defecto tiene un ancho de 0%, se le da un tamaño y color con la ayuda de css, además tendrá un posicionamiento absoluto y centrado sobre su elemento padre.
    3. Cuando se hace hover sobre un elemento del menú, seleccionamos el elemento div que le acompaña (utilizando la funcion "next()") y se le aplica una animación para cambiarle el tamaño, de forma que pase de 0% a 85% al hacer hover y de 85% a 0% al perder el hover.
    4. Con lo anterior conseguimos el efecto deseado de que cuando se pase con el raton sobre el elemento aparezca una línea bajo él que crece al sobrevolar el elemento y desaparece al dejar de hacerlo.
    5. Además se le ha realizado un cambio de tamaño al propio elemento sobre el que se hace hover, de forma que se haga más énfasis en que está "seleccionado".