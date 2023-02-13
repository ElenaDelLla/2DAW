<?php

session_start();
require "vendor/autoload.php";

use eftec\bladeone\BladeOne;
use App\BD;

$views = __DIR__ . '/views'; // it uses the folder /views to read the templates
$cache = __DIR__ . '/cache'; // it uses the folder /cache to compile the result. 

$blade = new BladeOne($views, $cache, BladeOne::MODE_DEBUG);

$database = BD::getConexion();

if (!isset($_SESSION['usuario'])) { // Si no usuario logado
    if (empty($_POST)) { // Primer acceso a página
        echo $blade->run('login');
        exit;
    }
}