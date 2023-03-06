# Ejercicio 3

Crea un programa HTML con los siguientes elementos:
◦ Un div con identificador “demo”.
◦ Un botón llamado “Calorias de las comidas del menú”. De forma que cuando se pulse
se muestre en el div con identificador “demo” este mensaje para cada comida: “La
comida XXXX tiene XX calorias”.
Para calcular las calorias de cada comida utilizará un fichero XML llamado ej3UT7.xml
(que está en el aula virtual) con este contenido:
<menu_almuerzo>
 <comida>
    <nombre>Waffles</nombre>
    <precio>$2.00</precio>
    <descripcion>Waffles baratos de McDonalds</descripcion>
    <calorias>650</calorias>
 </comida>
 <comida>
    <nombre>Hamburguesa</nombre>
    <precio>$5.00</precio>
    <descripcion>La hamburguesa mas comun de McDonalds</descripcion>
    <calorias>1500</calorias>
 </comida>
</menu_almuerzo>
Este fichero XML se pedirá al servidor mediante AJAX.