<?php

if (empty($_POST)) {
    header('Location: index.php');
}

$cantidad = filter_input(INPUT_POST, "cantidad");
$divisaOrigen = filter_input(INPUT_POST, "divisaOrigen");
$divisaDestino = filter_input(INPUT_POST, "divisaDestino");
$action = filter_input(INPUT_POST, "resetbutton");
$equivalencia = 0;
$resultado = true;

if($cantidad < 0 || $action == "Reset"){
    header('Location: index.php');
}
switch ($divisaOrigen) {
    case "EUR": {
            switch ($divisaDestino) {
                case "EUR": {
                       $equivalencia =  round($cantidad, 2);
                        break;
                    }
                case "USD": {
                        $equivalencia = round(0.98 * $cantidad, 2);
                        break;
                    }
                case "GBP": {
                        $equivalencia = round(0.88 * $cantidad, 2);
                        break;
                    }
                case "CNY": {
                        $equivalencia = round(6.98 * $cantidad, 2);
                        break;
                    }
                default:
                    $resultado = false;
                    break;
            }
            break;
        }
    case "USD": {
            switch ($divisaDestino) {
                case "EUR": {
                        $equivalencia = round(1.02 * $cantidad, 2);
                        break;
                    }
                case "USD": {
                        $equivalencia = round($cantidad, 2);
                        break;
                    }
                case "GBP": {
                        $equivalencia = round(0.90 * $cantidad, 2);
                        break;
                    }
                case "CNY": {
                        $equivalencia = round(7.12 * $cantidad, 2);
                        break;
                    }
                default:
                    $resultado = false;
                    break;
            }
            break;
        }
    case "GBP": {
            switch ($divisaDestino) {
                case "EUR": {
                        $equivalencia = round(1.14 * $cantidad, 2);
                        break;
                    }
                case "USD": {
                        $equivalencia = round(1.11 * $cantidad, 2);
                        break;
                    }
                case "GBP": {
                        $equivalencia = round($cantidad,2);
                        break;
                    }
                case "CNY": {
                        $equivalencia = round(7.92 * $cantidad, 2);
                        break;
                    }
                default:
                    $resultado = false;
                    break;
            }
            break;
        }
    case "CNY": {
            switch ($divisaDestino) {
                case "EUR": {
                        $equivalencia = round(0.14 * $cantidad, 2);
                        break;
                    }
                case "USD": {
                        $equivalencia = round(0.14 * $cantidad, 2);
                        break;
                    }
                case "GBP": {
                        $equivalencia = round(0.13 * $cantidad, 2);
                        break;
                    }
                case "CNY": {
                        $equivalencia = round($cantidad, 2);
                        break;
                    }
                default:
                    $resultado = false;
                    break;
            }
            break;
        }
    default:
        $resultado = false;
        break;
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Guess a number</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Currency-exchange</title>
    </head>
    <body>
        <div class="flex-page">
            <h1>Cambiador de divisas</h1>
            <form class="border" name="aleatory_number" action="intercambiador.php" method="POST">
                <div class="form-section">
                    <label>Cantidad: </label>
                    <input id="cantidad" type="number" required="true" name="cantidad" step="0.01" value="<?php echo $cantidad; ?>"/>
                    <select name="divisaOrigen" required="true" class="margin">
                        <option value="EUR" 
                        <?php if($divisaOrigen == "EUR"){
                                   echo "selected";
                        } ?> >Euro (EUR)
                        </option>
                        <option value="USD" 
                        <?php if($divisaOrigen == "USD"){
                            echo "selected";
                        } ?> >Dólar (USD)
                        </option>
                        <option value="GBP" 
                        <?php if($divisaOrigen == "GBP"){
                            echo "selected";
                        } ?> >Libra Esterlina (GBP)
                        </option>
                        <option value="CNY"
                        <?php if($divisaOrigen == "CNY"){
                            echo "selected";
                        } ?> >Yuan (CNY)
                        </option>
                    </select>
                </div> 
                <p class="parrafo">Indica a que divisa quieres cambiar: </p>
                  <div class="form-section">
                        <label>Resultado: </label>
                        <input id="resultado" type="number" name="resultado"  readonly="true" value="<?php echo $equivalencia; ?>"/>
                        <select name="divisaDestino" required="true" class="margin"> 
                        <option value="EUR"
                        <?php if($divisaDestino == "EUR"){
                            echo "selected";
                        } ?>        
                        >Euro (EUR)</option>
                        <option value="USD"
                        <?php if($divisaDestino == "USD"){
                            echo "selected";
                        } ?>        
                        >Dólar (USD)</option>
                        <option value="GBP"
                        <?php if($divisaDestino == "GBP"){
                            echo "selected";
                        } ?>        
                        >Libra Esterlina (GBP)</option>
                        <option value="CNY"
                        <?php if($divisaDestino == "CNY"){
                            echo "selected";
                        } ?>        
                        >Yuan (CNY)</option>
                    </select>
                  
                </div>
                <div class="form-section">
                    <div class="submit-section">
                        <input class="submit" type="submit" value="Send" name="sendbutton" />
                        <input class="submit" type="submit" value="Reset" name="resetbutton" />
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>


