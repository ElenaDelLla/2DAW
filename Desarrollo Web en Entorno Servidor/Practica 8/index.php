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
                        <input id="numbers" type="text" name="dateText" placeholder="dd/mm/aaaa" /> 
                    </div>
                    <div class="form-section" >
                        <label for="numbers">Introduce tu fecha de nacimiento:</label> 
                        <input id="numbers" type="date" name="date" max="<?php echo date("Y-m-d")?>"/> 
                    </div>
                    <div class="form-section">
                        <div class="submit-section">
                            <input class="submit" type="submit" 
                                   value="Send" name="sendbutton" /> 
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>
