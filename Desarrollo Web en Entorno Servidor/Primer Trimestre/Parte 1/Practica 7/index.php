<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Roll a dice</title>
    </head>
    <body>
        <form method="POST" action="dado.php">
        <h1>Roll a dice</h1>
        <h2>Indica el número de tiradas del dado</h2>
        <input type="number" name="number" required="true" placeholder="Número de tiradas">
        <div class="form-section">
            <div class="submit-section">
                <input class="submit" type="submit"value="Send" name="sendbutton" /> 
            </div>
        </div>
        
        </form>
    </body>
</html>
