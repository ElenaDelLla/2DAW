<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Currency-exchange</title>
    </head>
    <body>
        <div class="flex-page">
            <h1>Cambiador de divisas</h1>
            <form class="border" name="aleatory_number" action="intercambiador.php" method="POST">
                <div class="form-section">
                    <label>Cantidad: </label>
                    <input id="cantidad" type="number" required="true" name="cantidad" step="0.01"></>
                
                    <select name="divisaOrigen" required="true" class="margin">
                        <option value="EUR">Euro (EUR)</option>
                        <option value="USD">Dólar (USD)</option>
                        <option value="GBP">Libra Esterlina (GBP)</option>
                        <option value="CNY">Yuan (CNY)</option>
                    </select>
                </div> 
                <p class="parrafo">Indica a que divisa quieres cambiar: </p>
                  <div class="form-section">
                    <select name="divisaDestino" required="true"> 
                        <option value="EUR">Euro (EUR)</option>
                        <option value="USD">Dólar (USD)</option>
                        <option value="GBP">Libra Esterlina (GBP)</option>
                        <option value="CNY">Yuan (CNY)</option>
                    </select>
                </div>
               
                <div class="form-section">
                    <div class="submit-section">
                        <input class="submit" type="submit" value="Send" name="sendbutton" />
                    </div>
                </div>
            </form>
        </div>
   
       
    </body>
</html>
