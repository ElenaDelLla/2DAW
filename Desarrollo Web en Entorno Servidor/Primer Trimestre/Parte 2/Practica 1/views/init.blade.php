@extends('app')
@section('title', 'Guess a number')
@section('h1Text', 'Bienvenido al juego')
@section('content')
<form class="border" name="aleatory_number" action="index.php" method="POST">
    <div class="form-section">
        <label>Numero de intentos: </label>
        <input id="contador" type="number" required="true" name="contador"></>
    </div>
    <div class="form-section">
        <label for="min">Rango minimo: </label>
        <input id="min" type="number" required="true" name="min"/>
    </div>
    <div class="form-section">
        <label for="max">Rango maximo: </label>
        <input id="max" type="number" required="true" name="max"/>
    </div>
    <div class="form-section">
        <div class="submit-section">
            <input class="submit" type="submit" value="Send" name="sendbutton" />
        </div>
    </div>
</form>
@endSection