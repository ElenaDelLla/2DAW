@extends('app')
@section('contenido')
<h1>Catalogo de productos:</h1>
<h2>Categorías:</h2>
<div class="listaCategorias">
    @foreach($categorias as $categoria)
    <div class="categoria">
        <form action="index.php" method="post">
            <input type="hidden" name="idCategoria" value="{{$categoria->getId()}}">
            <input type="submit" name="VerProductosCategoria" value="{{$categoria->getNombre()}}">
        </form>
    </div>
    @endforeach
</div>
<div class="resultado">
    {{$resultado}}
</div>
@if(isset($productos))
<h2>Productos:</h2>
<form action="index.php" method="post">
    <input type="hidden" name="idCategoria" value="{{$idCategoria}}">
    <input type="submit" name="NuevoProducto" value="Nuevo Producto">
</form>
<div class="listaProductos">
    @foreach($productos as $producto)
    <div class="producto">
        <form action="index.php" method="post">
            <input type="hidden" name="idProducto" value="{{$producto->getId()}}">
            <input type="hidden" name="idCategoria" value="{{$idCategoria}}">
            <div class="nombre"><span>Nombre: </span>{{$producto->getNombre()}}</div>
            <div class="precio"><span>Precio: </span>{{$producto->getPrecio()}}€</div>
            <input type="submit" name="ModificarProducto" value="Modificar">
            <input type="submit" name="BorrarProducto" value="Borrar">
        </form>
    </div>
    @endforeach
</div>
@endif
@endSection
