<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Busca palindromos</title>
    </head>
    <body>
        <form method="POST" action="palindromo.php">
            <h1>Busca palindromos</h1>
            <h2>Introduce el texto en el cual buscar palíndromos:</h2>
            <textarea name="texto" required="true" placeholder="Escribe aqui tu texto" rows="10" cols="50" ></textarea>
            <div class="form-section">
                <div class="submit-section">
                    <input class="submit" type="submit"value="Enviar" name="sendbutton" /> 
                </div>
            </div>
        </form>
    </body>
</html>
