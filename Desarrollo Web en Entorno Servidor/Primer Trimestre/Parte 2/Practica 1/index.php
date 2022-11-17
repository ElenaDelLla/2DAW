<?php

session_start();
require "vendor/autoload.php";

use eftec\bladeone\BladeOne;

$views = __DIR__ . '/views'; // it uses the folder /views to read the templates
$cache = __DIR__ . '/cache'; // it uses the folder /cache to compile the result. 

$blade = new BladeOne($views, $cache, BladeOne::MODE_DEBUG);

if (empty($_POST)) {// Si primer acceso a la aplicación
    echo $blade->run('init');
    exit;
} else {
    $reset = filter_input(INPUT_POST, "reset");
    if ($reset) {
        echo $blade->run('init');
        exit;
    }

    // miramos si existe el valor en sesion, si no existe lo sacamos de POST (cuando se ejecute el formulario la primera vez)
    if (!isset($_SESSION['contador'])) {
        $_SESSION["contador"] = filter_input(INPUT_POST, "contador", FILTER_VALIDATE_INT);
    }

    // miramos si existe el valor en sesion, si no existe lo sacamos de POST (cuando se ejecute el formulario la primera vez)
    if (!isset($_SESSION['min'])) {
        $_SESSION["min"] = filter_input(INPUT_POST, "min", FILTER_VALIDATE_INT);
    }

    // miramos si existe el valor en sesion, si no existe lo sacamos de POST (cuando se ejecute el formulario la primera vez)
    if (!isset($_SESSION['max'])) {
        $_SESSION["max"] = filter_input(INPUT_POST, "max", FILTER_VALIDATE_INT);
    }

    // miramos si existe el valor en sesion, si no existe lo sacamos de POST (cuando se ejecute el formulario la primera vez)
    if (!isset($_SESSION['aleatorio'])) {
        $_SESSION["aleatorio"] = rand($_SESSION["min"], $_SESSION["max"]);
    }

    // sacamos los datos de sesion y los guardamos en las variables
    $contador = $_SESSION["contador"];
    $min = $_SESSION["min"];
    $max = $_SESSION["max"];
    $aleatorio = $_SESSION["aleatorio"];

    $introducido = filter_input(INPUT_POST, "numeroIntroducido", FILTER_VALIDATE_INT);
    $resultado = "";

    /* Comprobar si se ha introducido un número */
    if (!$introducido) {
        echo $blade->run('game', ['resultado' => $resultado]);
        exit;
    } else {
        if ($introducido < $min || $introducido > $max) {
            $resultado = "Debes introducir números del " . $min . " al " . $max;
        } else {
            $contador--;
            $victoria = false;
            if ($introducido > $aleatorio) {
                $resultado = "¡Has fallado! El número generado es menor que " . $introducido;
            } elseif ($introducido < $aleatorio) {
                $resultado = "¡Has fallado! El número generado es mayor que " . $introducido;
            } else {
                $victoria = true;
                session_destroy(); // el juego ha acabado, vaciamos la sesion
                echo $blade->run('victory');
                exit;
            }
            if ($contador == 0 && !$victoria) {
                session_destroy(); // el juego ha acabado, vaciamos la sesion
                echo $blade->run('defeat');
                exit;
            }
        }
        // el juego continua, actualizamos el valor de contador en sesion y volvemos a pantalla de juego
        $_SESSION["contador"] = $contador;
        echo $blade->run('game', ['resultado' => $resultado]);
        exit;
    }
}
?>