<?php
if (empty($_POST)) {
    header("Location: index.php");
}

$numbersString = filter_input(INPUT_POST, "numbers", FILTER_SANITIZE_STRING);
$validString = false;
//3 o 1-9 o 1,3,5,7-9.
if ($numbersString && preg_match("/^([0-9](-[0-9])?)((,[0-9](-[0-9])?)?)+$/", $numbersString)) {
    $validString = true;
}
$arrayNumbers = preg_split("/\,/", $numbersString); // Separar string por coma
$finalArray = [];
foreach ($arrayNumbers as $position) {
    if (preg_match("/^(([0-9]{1})-([0-9]{1})){1}$/", $position)) {
        $range = preg_split("/\-/", $position);
        for ($i = $range[0]; $i <= $range[1]; $i++) {
            $finalArray[] = $i;
        }
    } else {
        $finalArray[] = $position;
    }
}

$finalArrayWithoutRepeatedValues = array_unique($finalArray);// Eliminamos repetidos
$finalArrayWithoutRepeatedValuesOrder =  sort($finalArrayWithoutRepeatedValues);
 // Ordenamos los valores
//echo print_r($finalArrayWithoutRepeatedValues); //pintar array
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Multiplication tables</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <div class="flex-page">
            <h1>Multiplication tables</h1>
            <h2><?php
                if (!$validString) {
                    echo 'Número no válido';
                }
                ?></h2>
            <form class="border" name="multiplicationTablesForm" 
                  action="multiplicationTables.php" method="POST" >
                <div class="flex-outer">
                    <div class="form-section">
                        <label for="numbers">Tablas de multiplicar:</label> 
                        <input id="numbers" type="text" name="numbers" placeholder="Tablas de multiplicar" value="<?php echo $numbersString ?>" /> 
                    </div>
                    <div class="form-section">
                        <div class="submit-section">
                            <input class="submit" type="submit" 
                                   value="Send" name="sendbutton" /> 
                        </div>
                    </div>
                </div>
            </form>
            <?php if ($validString) { ?>
                <h3>Resultado</h3>
                <div class = "results">
                    <?php
                    $contador = 0;

                    foreach ($finalArrayWithoutRepeatedValues as $number) {
                        $contador++;
                        ?>
                        <div <?php
                        if ($contador % 2 == 0) {
                            echo 'class = "fondo"';
                        }
                        ?>>
                            <h2><?php echo "Tabla del " . $number ?></h2>
                            <table>
                                <?php
                                for ($index = 1; $index <= 10; $index++) {
                                    ?>
                                    <tr>
                                        <td>
                                            <?php echo $number . " x " . $index . " = " . $number * $index; ?>
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
                <?php
            }
            ?>
        </div>
    </body>
</html>
