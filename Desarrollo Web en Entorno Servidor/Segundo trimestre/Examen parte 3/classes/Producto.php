<?php

class Producto {

    private $id;
    private $nombre;
    private $precio;
    private $id_categoria;

    function getId() {
        return $this->id;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getPrecio() {
        return $this->precio;
    }

    function getId_categoria() {
        return $this->id_categoria;
    }

    function setId($id): void {
        $this->id = $id;
    }

    function setNombre($nombre): void {
        $this->nombre = $nombre;
    }

    function setPrecio($precio): void {
        $this->precio = $precio;
    }

    function setId_categoria($id_categoria): void {
        $this->id_categoria = $id_categoria;
    }

    function borrar($database) {
        $sql = "DELETE FROM productos WHERE id = :id";
        $stmt = $database->prepare($sql);
        $result = $stmt->execute([":id" => $this->id]);
        if ($result) {
            return "Producto eliminado correctamente";
        }
        return "Error al eliminar producto";
    }

    static function obtieneProductosPorIdCategoria($database, $idCategoria) {
        $queryText = "SELECT id, nombre, precio, id_categoria FROM productos WHERE id_categoria = $idCategoria";
        error_log($queryText);
        $stmt = $database->query($queryText);
        $productos = $stmt->fetchAll(PDO::FETCH_CLASS, 'Producto');
        return $productos;
    }

    static function recuperarProductoPorId($database, $idProducto) {
        $queryText = "SELECT id, nombre, precio, id_categoria FROM productos WHERE id = $idProducto";
        error_log($queryText);
        $stmt = $database->query($queryText);
        $productos = $stmt->fetchAll(PDO::FETCH_CLASS, 'Producto');
        if (sizeof($productos) > 0) {
            return $productos[0];
        }
        return null;
    }

    static function crearProducto($database, $nombre, $precio, $idCategoria) {
        try {
            $queryText = "INSERT INTO productos (nombre, precio, id_categoria) VALUES (:nombre, :precio, :idCategoria)";
            error_log($queryText);
            $stmt = $database->prepare($queryText);
            $stmt->bindValue(':nombre', $nombre);
            $stmt->bindValue(':precio', $precio);
            $stmt->bindValue(':idCategoria', $idCategoria);
            $stmt->execute();
        } catch (Exception $exc) {
            return false;
        }
        return true;
    }

    static function modificarProducto($database, $idProducto, $nombre, $precio, $categoria) {
        try {
            $queryText = "UPDATE productos SET nombre=:nombre, precio=:precio, id_categoria=:id_categoria WHERE id=:idProducto";
            error_log($queryText);
            $stmt = $database->prepare($queryText);
            $stmt->bindValue(':nombre', $nombre);
            $stmt->bindValue(':precio', $precio);
            $stmt->bindValue(':id_categoria', $categoria);
            $stmt->bindValue(':idProducto', $idProducto);
            $stmt->execute();
        } catch (Exception $exc) {
            error_log($exc);
            return false;
        }
        return true;
    }

}
