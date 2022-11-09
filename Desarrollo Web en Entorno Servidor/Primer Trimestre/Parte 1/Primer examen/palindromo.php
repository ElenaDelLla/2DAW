<?php
if (empty($_POST)) {
    header("Location: index.php");
}

$texto = filter_input(INPUT_POST, "texto");
$resultado = "No hay palíndromos";

function esPalindromo($palabra) {
    $palabraMinusculas = strtolower($palabra);
    $palabraInvertida = strrev($palabraMinusculas);

    if ($palabraMinusculas == $palabraInvertida) {
        return true;
    }
    return false;
}

if ($texto) {
    $arrayPalabras = preg_split('/[, ]/', $texto);
    if (sizeof($arrayPalabras) > 0) {
        $palindromosEncontrados = [];
        foreach ($arrayPalabras as $palabra) {
            if (esPalindromo($palabra)) {
                $palindromosEncontrados[] = $palabra;
            }
        }
        if (sizeof($palindromosEncontrados) > 0) { 
            usort($palindromosEncontrados, function($a, $b) {
                return strlen($b) - strlen($a);
            }); 
            $resultado = "<h2>Palindromos encontrados:</h2>"; 
            foreach ($palindromosEncontrados as $palabra) {
                $resultado = $resultado . $palabra . "</br>"; 
            }
        }
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Busca palindromos</title>
    </head>
    <body>
        <h1>Busca palindromos</h1>
        <form method="POST" action="palindromo.php">
            <div class="submit-section">
                <textarea name="texto" required="true" placeholder="Escribe aqui tu texto" rows="10" cols="50" ></textarea>
            </div>
            
            <div class="flex-page">
                <h3>
                    <?php echo $resultado; ?>
                </h3>
                <div class="submit-section">
                    <input class="submit" type="submit"value="Enviar" name="sendbutton" /> 
                </div>
            </div>
        </form>
    </body>
</html>

