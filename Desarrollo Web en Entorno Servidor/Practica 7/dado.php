<?php

if(empty($_POST)){
    header("Location: index.php");
}

$number = filter_input(INPUT_POST, "number", FILTER_VALIDATE_INT);
$numberValid = false;
$result = [];

if($number && $number >= 1){
   $numberValid = true; 
}

if($numberValid){
    for($i = 0; $i < $number; $i++){
        $tirada = rand(1,6);
        array_push($result, $tirada);
    }
    sort($result, SORT_NUMERIC);
    $arrayValues = array_count_values($result);
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Roll a Dice</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <div class="flex-page">
            <h1>Roll a Dice</h1>
            <h2><?php
                if (!$numberValid) {
                    echo 'Número no válido';
                }
                ?></h2>
            <form action="dado.php" method="POST" >
                <div class="flex-outer">
                    <div class="form-section" >
                        <label for="numbers">Número de tiradas:</label> 
                        <input id="numbers" type="number" name="number" required="true" placeholder="Número de tiradas" value="<?php echo $number ?>"/> 
                    </div>
                    <div class="form-section">
                        <div class="submit-section">
                            <input class="submit" type="submit" 
                                   value="Send" name="sendbutton" /> 
                        </div>
                    </div>
                </div>
            </form>
            <?php if ($numberValid) { ?>
                <h3>Resultado de las tiradas:</h3>
                <div class="result"> 
                    <table>
                        <?php
                        foreach ($arrayValues as $index => $val) {
                            ?>
                            <tr>
                                <td>
                                    <?php echo "La cara " . ($index); ?>
                                </td>
                                <td>
                                    <?php echo "ha salido " . $val . " veces"; ?>
                                </td>
                            </tr>
                            <?php
                        }
                        ?>
                    </table>
                </div>
                <?php
            }
            ?>
        </div>
    </body>
</html>

