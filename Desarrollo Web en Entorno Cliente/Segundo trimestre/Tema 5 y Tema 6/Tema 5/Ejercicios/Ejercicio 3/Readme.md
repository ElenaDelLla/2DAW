# Ejercicio 3
Crea una página HTML con el siguiente elemento radio-button:
 <form id="formulario">
     <input type="radio" id="c_madrid" name="ciudad" value="Madrid">
     <label for="c_madrid">MAdrid</label><br>
     <input type="radio" id="c_sevilla" name="ciudad" value="Sevilla">
     <label for="c_sevilla">Sevilla</label><br>
     <input type="radio" id="c_cuenca" name="ciudad" value="Cuenca">
     <label for="c_cuenca">Cuenca</label>
 </form>

Además crea un botón que al pulsarlo lista el valor de los atributos de cada elemento
html con nombre ciudad utilizando getElementsByName() y bucle forEach.