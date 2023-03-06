# Ejercicio 15 Entregar

Dado el programa HTML de este ejercicio (está en el aula virtual con el nombre Programa HTML del ejercicio 15), crea el código JavaScript necesario para que se valide el formulario antes de ser enviado utilizando el método de registro avanzado de eventos de W3C. Tienes que hacerlo de la siguiente forma:

1.	La validación del formulario completo se realizará cuando el usuario haga click en el botón de envío. 

2.	Todos los campos son obligatorios y si se pide un formato concreto se debe cumplir para que el dato se considere válido.

3.	La validación del formulario se realizará de la siguiente forma. Cuando se encuentre un campo con valor inválido o sin rellenar, la validación del formulario debe terminar. 

NOTA: para conseguir esto se puede utilizar lo siguiente:

if (validarCampo1() && validarCampo2())

Siendo validarCampo1 y validarCampo2 funciones que devuelven true si el valor introducido en sus campos es válido, y false si es inválido. Se llaman a las funciones unidas con && en un condicional, para que si validarCampo1 devuelve false ya no se ejecuta validarCampo2 y así sucesivamente)

Respecto a ese primer valor inválido encontrado se debe hacer lo siguiente:

a)	Se debe informar al usuario del error cometido mediante el div errores.
b)	Se debe asignar al campo en el que el usuario ha introducido un dato inválido la clase de estilos “error”. Esto se hace así: elemento.className=”error”
c)	Se debe poner el foco en el campo, para que le sea más fácil al usuario corregir dicho error.

4.	La matrícula debe tener este formato “4 Números 1 espacio en blanco(opcional) y 3 letras de la A-Z en mayúsculas”. 

5.	La edad debe estar entre 0 y 105.

6.	Cada vez que los campos “Nombre” y “Apellidos” pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.

7.	Si tras validar el formulario todos los campos tienen valores válidos se pedirá confirmación al usuario. Si el usuario confirma el envío del formulario se ejecutará la acción por defecto del botón de envío (el submit), pero si algún campo no tiene un valor válido o el usuario no confirma el envío del formulario se anulará esta acción (realizalo con preventDefault().

8.	Además se va a guardar en una cookie llamada “contador” el número de veces que se intenta enviar el formulario. Cada vez que se intente enviar el formulario este valor se va a incrementar en 1, y se va a mostrar en el elemento div con id “intentos” el número de intentos que se han utilizado.
