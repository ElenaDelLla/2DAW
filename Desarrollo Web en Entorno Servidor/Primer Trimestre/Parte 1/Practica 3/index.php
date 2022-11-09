<!DOCTYPE html>
<html>
    <head>
        <title>Guess a number</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <div class="flex-page">
            <h1>¡Bienvenido al juego!</h1>
            <form class="border" name="aleatory_number" action="juegoPHP.php" method="POST">
                <div class="form-section">
                    <label>Numero de intentos: </label>
                    <input id="contador" type="number" required="true" name="contador"></>
                </div>
                <div class="form-section">
                    <label for="min">Rango minimo: </label>
                    <input id="min" type="number" required="true" name="min"/>
                </div>
                <div class="form-section">
                    <label for="max">Rango maximo: </label>
                    <input id="max" type="number" required="true" name="max"/>
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