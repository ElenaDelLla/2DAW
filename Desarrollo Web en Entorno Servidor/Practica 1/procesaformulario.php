
<!DOCTYPE html>
<html>
    <head>
        <title>Register Form</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <div class="form-font capaform">
            <p>Nombre: <?php /*Entre corchetes se pone el campo name del index.php */
                $name = $_POST['name'];
                if($name == ""){
                    echo "No se han introducido datos";
                }else{
                    echo $name;
                }
            ?> 
            <p>Email: <?php
                $email = $_POST['email'];
                if ($email == ""){   
                    echo "No se han introducido datos";
                }else{
                    echo $email;
                }
            ?><br>
            <p>Contraseña: <?php
                $pass = $_POST['password'];
                if($pass == ""){
                    echo "No se han introducido datos";
                }else{
                    echo $pass;
                }
            ?><br>
            <p>Fecha de nacimiento: <?php
            $fecha = $_POST['dateofbirth'];
                if(!isset($_POST['dateofbirth']) || $_POST['dateofbirth'] == ""){
                    echo "No existe el campo fecha";
                } else {
                    echo $fecha;
                }
            ?><br>
            <p>Telefono: <?php
                $tel = $_POST['tel'];
                if($tel == ""){
                    echo "No se han introducido datos";
                }else{
                    echo $tel;
                }
            ?><br>
            <p>Tienda mas cercana: <?php  
                if(!isset($_POST['shop']) || $_POST['shop'] == ""){
                    echo "No existen datos de tienda cercana";
                }else{
                    $tienda = $_POST['shop'];
                        echo $tienda;
                    }?><br>
            
            <p>Edad: <?php
                if(!isset($_POST['age']) || $_POST['age'] == ""){
                    echo "No existen datos para la edad"; 
                    
                }else{
                    $edad = $_POST['age'];
                if($edad == "-25"){ 
                        echo "Menos de 25 años";
                }else if($edad == "25-50"){
                    echo "Entre 25 y 50 años";
                }else if ($edad == "50-") {
                    echo "Mayor de 50 años";
                }   
                }?><br>
                
            <p>Suscripción a la Newsletter: <?php 
                if (!isset($_POST['subscription']) || $_POST['subscription'] == ""){
                    echo "No acepta";
                }else{
                    echo "Acepta";
               }?>
        </div> 
    </body>
</html>
       



