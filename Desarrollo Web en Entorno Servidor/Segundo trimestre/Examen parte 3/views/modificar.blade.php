@extends('app')
@section('contenido')
<h1>Nuevo producto</h1>
<form action="index.php" method="post">
    <div class="seccion-formulario">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" required value="{{$producto->getNombre()}}">
    </div>
    <div class="seccion-formulario">
        <label for="precio">Precio:</label>
        <input type="number" name="precio" step="0.01" required value="{{$producto->getPrecio()}}">
    </div>
    <div class="seccion-formulario">
        <label for="categoria">Categoria</label>
        <select id="categoria" name="categoria">
            @foreach($categorias as $categoria)
            <option value="{{$categoria->getId()}}"
                    @if($categoria->getId() == $producto->getId_categoria())
                selected
                @endif
                >{{$categoria->getNombre()}}</option>
            @endforeach
        </select>
    </div>
    <div class="seccion-formulario">
        <input type="hidden" name="idProducto" value="{{$producto->getId()}}">
        <input type="submit" name="ConfirmarModificarProducto" value="Modificar">
    </div>
</form>
@endSection
