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
            <form class="border"name="multiplicationTablesForm" 
                  action="multiplicationTables.php" method="POST" >
                <div class="flex-outer">
                    <div class="form-section" >
                        <label for="numbers">Tablas de multiplicar:</label> 
                        <input id="numbers" type="text" name="numbers" required="true" placeholder="Tablas de multiplicar" /> 
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
