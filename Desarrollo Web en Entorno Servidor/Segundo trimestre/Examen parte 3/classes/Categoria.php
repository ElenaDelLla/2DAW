<?php

class Categoria {

    private $id;
    private $nombre;

    function getId() {
        return $this->id;
    }

    function getNombre() {
        return $this->nombre;
    }

    function setId($id): void {
        $this->id = $id;
    }

    function setNombre($nombre): void {
        $this->nombre = $nombre;
    }

    public static function recuperarCategorias($database) {
        $queryText = "SELECT id, nombre FROM categorias";
        error_log($queryText);
        $stmt = $database->query($queryText);
        $categorias = $stmt->fetchAll(PDO::FETCH_CLASS, 'Categoria');
        return $categorias;
    }

}
