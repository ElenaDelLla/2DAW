# codigo_embebido_en_paginas_web_II
Este repositorio sirve para subir a GitHub tu prueba de aptitud de la unidad Desarrollo de Aplicaciones Web Dinámicas. 
Durante la prueba no olvides realizar commits cada 25 minutos.

# Enunciado:

Catálogo de Productos
Escribe una aplicación PHP que permita gestionar un pequeño catálogo de productos de una tienda de alimentación. La tienda ha definido las siguientes categorías “Bebidas”, “Charcutería”, “Pescadería” y “Panadería”.
La aplicación validará las credenciales del administrador antes de permitirle realizar cualquier operación sobre el catálogo. Los usuarios ya están dados de alta en la base de datos (admin/admin).
Una vez validado el administrador podrá navegar y crear y modificar productos del catálogo.
La aplicación mostrara la lista de categorías existentes en la tienda obtenidas de la base de datos, pinchando en cada categoría se puede acceder al listado de productos de cada categoría. Junto a cada producto aparece un botón para modificar. Además, aparecerá otro botón en la parte superior que permitirá añadir un nuevo producto a esa categoría
Se podrá modificar la información relativa a los productos, incluida su categoría. El valor de la categoría del producto se mostrará como un menú desplegable con todas las categorías posibles obtenidas de la base de datos.
La aplicación debe retroalimentar al usuario de alguna forma de la realización de la operación con éxito o el problema encontrado.
Una categoría se describe mediante un nombre.
Un producto se describe mediante un nombre y un precio.
Un producto debe pertenecer a una sola categoría y una categoría puede incluir muchos productos.
Piensa detenidamente en los componentes MVC de tu aplicación. Diseña la asociación entre los objetos del modelo de la aplicación. Implementa la estrategia que permita dar persistencia a la información en la BBDD. Utiliza los principios de diseño OO más adecuados, utiliza la librería de vistas BladeOne.