<?php
if (empty($_POST)) {
    header("Location: index.php");
}

$min = filter_input(INPUT_POST, "min", FILTER_VALIDATE_INT);
$max = filter_input(INPUT_POST, "max", FILTER_VALIDATE_INT);
$aleatorio = filter_input(INPUT_POST, "aleatorio", FILTER_VALIDATE_INT);
$contador = filter_input(INPUT_POST, "contador", FILTER_VALIDATE_INT);
$introducido = filter_input(INPUT_POST, "numeroIntroducido", FILTER_VALIDATE_INT);
$valido = true;

if (!$aleatorio) {
    $aleatorio = rand($min, $max);
}

/* Comprobar si se ha introducido un número */
if ($introducido) {
    if ($introducido < $min || $introducido > $max) {
        $valido = false;
    }
} else {
    $valido = false;
}
$resultado = "";
if ($valido) {
    $contador--;
    $victoria = false;
    if ($introducido > $aleatorio) {
        $resultado = "¡Has fallado! El número generado es menor que " . $introducido;
    } elseif ($introducido < $aleatorio) {
        $resultado = "¡Has fallado! El número generado es mayor que " . $introducido;
    } else {
        $victoria=true;
        header("Location: victoria.php");
    }
    if($contador == 0 && !$victoria){
        header("Location: derrota.php");
    }
} else {
    $resultado = "Debes introducir números del " . $min . " al " . $max;
}
?>

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
            <h1>¡Nuevo intento!</h1>
            <h2><?php echo $resultado ?></h2>
            <h3>Numero de intentos restantes: <?php echo $contador; ?></h3>
            <form class="border" name="aleatory_number" action="juegoPHP.php" method="POST">
                <div class="oculto" class="form-section">
                    <input id="aleatorio" type="number" name="aleatorio" value="<?php echo $aleatorio; ?>"></>
                </div>
                <div class="oculto" class="form-section">
                    <input id="min" type="number" value="<?php echo $min; ?>" name="min"/>
                </div>
                <div class="oculto" class="form-section">
                    <input id="max" type="number" value="<?php echo $max; ?>" name="max"/>
                </div>
                <div class="oculto" class="form-section">
                    <input id="contador" type="number" name="contador" value="<?php echo $contador; ?>"></>
                </div>
                <div class="form-section">
                    <label>Introduce el número: </label>
                    <input id="numb" type="number" name="numeroIntroducido" placeholder="Introduce el número con el que quieres jugar"></>
                </div>
                <div class="submit-section">
                    <input class="submit" type="submit" value="Send" name="sendbutton" /> 
                </div>
            </form>
        </div>
    </body>
</html>

