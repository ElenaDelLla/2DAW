@extends('app')
@section('title', 'Guess a number')
@section('h1Text', '¡Nuevo intento!')
@section('content')
<h2>{{$resultado}}</h2>
<h3>Numero de intentos restantes: {{ $_SESSION["contador"] }} </h3>
<form class="border" name="aleatory_number" action="index.php" method="POST">
    <div class="form-section">
        <label>Introduce el número: </label>
        <input id="numb" type="number" name="numeroIntroducido" placeholder="Introduce el número con el que quieres jugar"/>
    </div>
    <div class="submit-section">
        <input class="submit" type="submit" value="Send" name="sendbutton" /> 
    </div>
</form>
@endSection