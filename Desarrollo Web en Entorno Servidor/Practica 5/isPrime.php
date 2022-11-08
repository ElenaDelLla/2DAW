<?php
if(empty($_POST)){
    header("Location: index.php");
}

$numero = filter_input(INPUT_POST, "num", FILTER_VALIDATE_INT);
$primo = true;
$texto = "";
$action = filter_input(INPUT_POST, "resetbutton");

if($numero < 0 || $action == "Comprobar nuevo numero"){
    header('Location: index.php');
}
$raizCuadrada = sqrt($numero);
// 2147483647
if($numero == 1){
    $primo = false;
} else {
    for ($i = 2; $primo && $i <= $raizCuadrada; $i++){
        if($numero % $i == 0){
            $primo = false;
        }
    }
}

if($primo){
    $texto = "es primo";
}else{
    $texto = "no es primo";
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Is prime</title>
    </head>
    <body>
        <h1>Comprobador de numeros primos</h1>
        
            <form class="border" name="isPrime" action="isPrime.php" method="POST">
                <h2><?php echo 'El número ' . $numero . ' ' . $texto; ?></h2>
                
                <div class="form-section">
                    <div class="submit-section">
                        <input class="submit" type="submit" value="Comprobar nuevo numero" name="resetbutton" />
                    </div>
                </div>
            </form>
    </body>
</html>

