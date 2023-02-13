<?php

session_start();
require "vendor/autoload.php";
require './classes/Usuario.php';
require './classes/Categoria.php';
require './classes/Producto.php';
require "BD.php";

use eftec\bladeone\BladeOne;
use App\BD;

$views = __DIR__ . '/views'; // it uses the folder /views to read the templates
$cache = __DIR__ . '/cache'; // it uses the folder /cache to compile the result. 

$blade = new BladeOne($views, $cache, BladeOne::MODE_DEBUG);

$database = BD::getConexion();

if (!isset($_SESSION['usuario']) && isset($_POST['Login'])) { // Si no usuario logado y formulario login
    $nombreUsuario = filter_input(INPUT_POST, "nombreUsuario");
    $password = filter_input(INPUT_POST, "password");
    $usuario = Usuario::loginUsuario($database, $nombreUsuario, $password); // Buscamos usuario
    if ($usuario) {
        $_SESSION["usuario"] = serialize($usuario); // Guardamos usuario en sesion
        $categorias = Categoria::recuperarCategorias($database);
        echo $blade->run('catalogo', ["categorias" => $categorias]);
        exit;
    } else {
        echo $blade->run('login', ["error" => "Usuario no existe o contraseña incorrecta"]); // Error si no existe o password incorrecto
        exit;
    }
} else if (isset($_POST['VerProductosCategoria'])) {
    $categorias = Categoria::recuperarCategorias($database);
    $idCategoria = filter_input(INPUT_POST, "idCategoria");
    $productos = Producto::obtieneProductosPorIdCategoria($database, $idCategoria);
    echo $blade->run('catalogo', ["categorias" => $categorias, "idCategoria" => $idCategoria, "productos" => $productos]);
    exit;
} else if (isset($_POST['NuevoProducto'])) {
    $idCategoria = filter_input(INPUT_POST, "idCategoria");
    echo $blade->run('nuevo', ["idCategoria" => $idCategoria]);
    exit;
} else if (isset($_POST['ComfirmarProducto'])) {
    $idCategoria = filter_input(INPUT_POST, "idCategoria");
    $nombre = filter_input(INPUT_POST, "nombre");
    $precio = filter_input(INPUT_POST, "precio");
    $resultado = Producto::crearProducto($database, $nombre, $precio, $idCategoria);
    $categorias = Categoria::recuperarCategorias($database);
    if ($resultado) {
        echo $blade->run('catalogo', ["categorias" => $categorias, "resultado" => "Producto creado correctamente"]);
        exit;
    } else {
        echo $blade->run('catalogo', ["categorias" => $categorias, "resultado" => "Error al crear el producto"]);
        exit;
    }
} else if (isset($_POST['ModificarProducto'])) {
    $idProducto = filter_input(INPUT_POST, "idProducto");
    $categorias = Categoria::recuperarCategorias($database);
    $producto = Producto::recuperarProductoPorId($database, $idProducto);
    echo $blade->run('modificar', ["categorias" => $categorias, "producto" => $producto]);
    exit;
} else if (isset($_POST['ConfirmarModificarProducto'])) {
    $nombre = filter_input(INPUT_POST, "nombre");
    $precio = filter_input(INPUT_POST, "precio");
    $categoria = filter_input(INPUT_POST, "categoria");
    $idProducto = filter_input(INPUT_POST, "idProducto");
    $resultado = Producto::modificarProducto($database, $idProducto, $nombre, $precio, $categoria);
    $categorias = Categoria::recuperarCategorias($database);
    if ($resultado) {
        echo $blade->run('catalogo', ["categorias" => $categorias, "resultado" => "Producto modificado correctamente"]);
        exit;
    } else {
        echo $blade->run('catalogo', ["categorias" => $categorias, "resultado" => "Error al modificar el producto"]);
        exit;
    }
} else if (isset($_POST['BorrarProducto'])) {
    $idProducto = filter_input(INPUT_POST, "idProducto");
    $idCategoria = filter_input(INPUT_POST, "idCategoria");
    $producto = Producto::recuperarProductoPorId($database, $idProducto);
    $resultado = $producto->borrar($database);
    $categorias = Categoria::recuperarCategorias($database);
    $productos = Producto::obtieneProductosPorIdCategoria($database, $idCategoria);
    echo $blade->run('catalogo', ["categorias" => $categorias, "idCategoria" => $idCategoria, "productos" => $productos, "resultado" => $resultado]);
    exit;
} else if (isset($_SESSION['usuario'])) {
    $categorias = Categoria::recuperarCategorias($database);
    echo $blade->run('catalogo', ["categorias" => $categorias]);
    exit;
} else {
    echo $blade->run('login');
    exit;
}