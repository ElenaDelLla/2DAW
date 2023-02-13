<?php

class Usuario {

    private $id;
    private $nombre;
    private $password;

    function getId() {
        return $this->id;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getPassword() {
        return $this->password;
    }

    static function loginUsuario($database, $nombreUsuario, $password) {
        $queryText = "SELECT id, nombre, password FROM usuarios WHERE nombre='" . $nombreUsuario . "' AND password='" . $password . "'";
        $stmt = $database->query($queryText);
        $usuarios = $stmt->fetchAll(PDO::FETCH_CLASS, 'Usuario');
        if (sizeof($usuarios) > 0) {
            return $usuarios[0];
        }
        return null;
    }

}
