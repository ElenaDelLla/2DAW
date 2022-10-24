<?php
if (empty($_POST)) {
    header("Location: index.php");
}

function isLeapYear($year) {
    return ( ($year % 4 == 0 && $year % 100 != 0) || $year % 400 == 0 );
}

/*Funciones para entrada de la fecha en formato texto*/

function dateTextIsCorrectDate($dateText) {
    $valid = true;
    $matches = [];
    $monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (preg_match("/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/", $dateText, $matches)) {
        $day = intval($matches[1]);
        $month = intval($matches[2]);
        $year = intval($matches[3]);
        if (isLeapYear($year)) {
            $monthsDays[1] = $monthsDays[1] + 1;
        }
        if ($month < 1 || $month > 12) {
            $valid = false;
        } else if ($day > $monthsDays[$month - 1]) {
            $valid = false;
        }
    } else {
        $valid = false;
    }
    return $valid;
}

function dateTextBeforeToday($dateText) {
    $valid = true;
    $matches = [];
    if (preg_match("/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/", $dateText, $matches)) {
        $day = intval($matches[1]);
        $month = intval($matches[2]);
        $year = intval($matches[3]);
        $currentDay = date('d');
        $currentMonth = date('m');
        $currentYear = date('Y');
        if ($currentYear < $year) {
            $valid = false;
        } else if ($currentYear == $year && $currentMonth < $month) {
            $valid = false;
        } else if ($currentYear == $year && $currentMonth == $month && $currentDay <= $day) {
            $valid = false;
        }
    } else {
        $valid = false;
    }
    return $valid;
}

function calcAgeFromDateText($dateText) {
    $dateParts = preg_split("/[\/]/", $dateText);
    $day = intval($dateParts[0]);
    $month = intval($dateParts[1]);
    $year = intval($dateParts[2]);
    $currentDay = date('d');
    $currentMonth = date('m');
    $currentYear = date('Y');
    $yearDiff = $currentYear - $year;
    $monthDiff = $currentMonth - $month;
    $dayDiff = $currentDay - $day;
    if($dayDiff  < 0){
        $monthDiff--;
    }
    if ($monthDiff < 0) {
        $yearDiff--;
    }
    return $yearDiff;
    
}


/*Funciones para la fecha tipo fecha*/


function dateIsCorrectDate($date) {
    $valid = true;
    $matches = [];

    if (preg_match("/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/", $date, $matches)) {
        $day = intval($matches[3]);
        $month = intval($matches[2]);
        $year = intval($matches[1]);
        if (!checkdate($month, $day, $year)) {
            $valid = false;
        }
    } else {
        $valid = false;
    }
    return $valid;
}

function dateBeforeToday($date) {
    $valid = true;
    $pastDate = new DateTime($date);
    $now = new DateTime();

    if ($pastDate > $now) {
        $valid = false;
    }

    return $valid;
}

function calcAgeFromDate($date) {
    return date_diff(new DateTime($date), new DateTime())->y;
}

/*Programa principal*/

$dateText = filter_input(INPUT_POST, "dateText");
$date = filter_input(INPUT_POST, "date");
$haveDate = true;
$result = "";
$receivedDate = "";
$age = 0;

if (!$date && !$dateText) {
    $haveDate = false;
    $result = "¡Debes introducir algun valor!";
} else {
    if ($dateText) {
        $receivedDate = "Recibida fecha en formato texto";
        if (!dateTextIsCorrectDate($dateText)) {
            $result = "Fecha de tipo texto incorrecta. Debe tener formato dd/mm/aaaa y ser una fecha válida";
        } else if (!dateTextBeforeToday($dateText)) {
            $result = "Fecha de tipo texto incorrecta. Debe ser anterior a la de hoy";
        } else {
            $age = calcAgeFromDateText($dateText);
            $result = "Tienes " . $age . " años <br>" . $receivedDate;
        }
    } else if ($date) {
        $receivedDate = "Recibida fecha en formato fecha";
        if (!dateIsCorrectDate($date)) {
            $result = "Fecha incorrecta. Debe ser una fecha válida";
        } else if (!dateBeforeToday($date)) {
            $result = "La fecha debe ser anterior a la de hoy";
        } else {
            $age = calcAgeFromDate($date);
            $result = "Tienes " . $age . " años <br>" . $receivedDate;
        }
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Tell me my age</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <div class="flex-page">
            <h1>Tell me my age</h1>

            <form class="border"name="myAgeForm" 
                  action="myAge.php" method="POST" >
                <div class="flex-outer">
                    <div class="form-section" >
                        <label for="numbers">Introduce tu fecha de nacimiento en formato texto (dd/mm/aaaa):</label> 
                        <input id="numbers" type="text" name="dateText" placeholder="Fecha de nacimiento" value="<?php echo $dateText ?>"/> 
                    </div>
                    <div class="form-section" >
                        <label for="numbers">Introduce tu fecha de nacimiento:</label> 
                        <input id="numbers" type="date" name="date" value="<?php echo $date ?>"/> 
                    </div>
                    <div class="form-section">
                        <div class="submit-section">
                            <input class="submit" type="submit" 
                                   value="Send" name="sendbutton" /> 
                        </div>
                    </div>
                </div>
            </form>
            <h2>Tu edad es:</h2>
            <div class = "results"> 
                <span><?php
                    echo $result;
                    ?>
                </span>
            </div>

        </div>
    </body>
</html>
