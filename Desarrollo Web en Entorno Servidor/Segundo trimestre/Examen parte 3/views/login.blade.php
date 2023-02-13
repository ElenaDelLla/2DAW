@extends('app')
@section('contenido')
<h1>Inicio de sesión</h1>
<form action="index.php" method="POST">
    <div class="seccion-formulario">
        <label for="nombreUsuario">Nombre: </label>
        <input id="nombreUsuario" type="text" name="nombreUsuario" maxlength="60" required placeholder="Nombre"/>
    </div>
    <div class="seccion-formulario">
        <label for="password">Password: </label>
        <input id="password" type="password" name="password" maxlength="20" required placeholder="Password"/>
    </div>
    <div class="seccion-formulario">
        <span class="error">{{$error}}</span>
    </div>
    <div class="seccion-submit">
        <input class="submit" name="Login" type="submit" value="Login"/> 
    </div>
</form>
@endSection
