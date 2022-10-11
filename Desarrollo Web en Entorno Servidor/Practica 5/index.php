<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Is prime</title>
    </head>
    <body>
        <h1>Comprobador de numeros primos</h1>
            <form class="border" name="isPrime" action="isPrime.php" method="POST">
                <div class="form-section">
                    <label>Número que quieres comprobar: </label>
                    <input id="num" type="number" required="true" name="num">
                </div> 
                <div class="form-section">
                    <div class="submit-section">
                        <input class="submit" type="submit" value="Send" name="sendbutton" />
                    </div>
                </div>
            </form>
    </body>
</html>
