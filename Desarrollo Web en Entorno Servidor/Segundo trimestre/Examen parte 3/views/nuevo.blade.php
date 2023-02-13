@extends('app')
@section('contenido')
<h1>Nuevo producto</h1>
<form action="index.php" method="post">
    <div class="seccion-formulario">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" required>
    </div>
    <div class="seccion-formulario">
        <label for="precio">Precio:</label>
        <input type="number" name="precio" step="0.01" required>
    </div>
    <div class="seccion-formulario">
        <input type="hidden" name="idCategoria" value="{{$idCategoria}}">
        <input type="submit" name="ComfirmarProducto" value="Crear">
    </div>
</form>
@endSection
