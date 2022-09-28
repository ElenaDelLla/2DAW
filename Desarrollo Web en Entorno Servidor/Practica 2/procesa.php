<?php

/*Si el formulario está vacío se redirige a la página principal*/
if(empty($_POST)){
    header("Location: index.php");
}
/*comprobar errores*/
    $valido = true;
    
    /*Validar nombre*/
    $nombre = filter_input(INPUT_POST, "name");
    $nombreOk = true;
    if($nombre){
        if(strlen($nombre) < 3 || strlen($nombre) > 25 ){
        $nombreOk = false;
        $valido = false;
        }
        if(preg_match("/[^A-Za-z ]/", $nombre)){
            $nombreOk = false;
            $valido = false;
        }
    } else {
        $nombreOk = false;
        $valido = false;
    }
    
    /*Validar contraseña*/
    $password = filter_input(INPUT_POST, "password");
    $passwordOk = true;
    if($password){
        if(strlen($password) < 6 || strlen($password) > 8 ){
        $passwordOk = false;
        $valido = false;
        }
    
        if(preg_match("/[^A-Za-z0-9]/", $password)){
            $passwordOk = false;
            $valido = false;
        }
    } else {
        $passwordOk = false;
        $valido = false;
    }
    
    /*Validar correo electrónico*/
    $emailOk = true;
    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
    if(!$email){
        $emailOk = false;
        $valido = false;
    }
    
    /*Validar fecha de nacimiento*/
    $date = filter_input(INPUT_POST, "dateofbirth");
    $dateOk = true;
    if(!$date){
        $dateOk = false;
        $valido = false;
    }
    /*Validar teléfono móvil*/
    $tel = filter_input(INPUT_POST, "tel");
    $telOk = true;
    if($tel){
        if(strlen($tel) != 9){
           $telOk = false;
            $valido = false; 
        }
    }
    /*Validar tienda mas cercana*/
    $shop = filter_input(INPUT_POST, "shop");
    $shopOk = true;
    if(!$shop){
        $shopOk = false;
        $valido = false;
    }
    /*Validar Edad*/
    $age = filter_input(INPUT_POST, "age");
    $ageOk = true;
    if(!$age){
        $ageOk = false;
        $valido = false;
    } 
    /*Validar suscripción*/
    $subscription = filter_input(INPUT_POST, "subscription");

    
    if($valido == true){
?>
<!DOCTYPE html>
<html><!-- Página de datos correctos -->
    <head>
        <title>Register Form</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <div class="form-font capaform">
            <p>Nombre: <?php 
                echo $nombre;
            ?> 
            <p>Email: <?php
                echo $email;                
            ?><br>
            <p>Contraseña: <?php
                echo $password;
            ?><br>
            <p>Fecha de nacimiento: <?php
                echo $date;
            ?><br>
            <p>Telefono: <?php
                echo $tel;
            ?><br>
            <p>Tienda mas cercana: <?php
                echo $shop;
            ?><br>
            
            <p>Edad: <?php
                if($age == "-25"){ 
                    echo "Menos de 25 años";
                }else if($age == "25-50"){
                    echo "Entre 25 y 50 años";
                }else if ($age == "50-") {
                    echo "Mayor de 50 años";
                }   
                ?><br>
                
            <p>Suscripción a la Newsletter: <?php 
                if (!$subscription){
                    echo "No acepta";
                }else{
                    echo "Acepta";
               }?>
        </div> 
    </body>
</html>
<?php 
}else{ ?><!-- Página de datos incorrectos -->
<html>
    <head>
        <title>Register Form</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
      <div class="flex-page">
               <h1>Customer Registration</h1>
        <form class="form-font capaform" name="registerform"method="POST">
            <div class="flex-outer">
               <div class="form-section">
                    <label for="name">Name:</label> 
                    <?php 
                    if(!$nombreOk){ ?>
                        <input id="name" type="text" name="name" placeholder="Enter your name:"/> 
                        <p class="rojo">El nombre solo puede contener mayusculas, nimusculas y espacios</p>
                    <?php } else{ ?>
                        <input id="name" type="text" name="name" value= "<?php echo $nombre ?>" placeholder="Enter your name:"/>
                    <?php } ?>
               </div>
                    
                   
               <div class="form-section">
                      <label for="password">Contraseña:</Label> 
                       <?php 
                    if(!$passwordOk){ ?>
                        <input id="password" type="password" name="password" placeholder="Enter your password:"/> 
                        <p class="rojo">La contraseña solo puede contener caracteres alfa-numéricos</p>
                    <?php } else{ ?>
                        <input id="password" type="password" name="password" value="<?php echo $password ?>" placeholder="Enter your password:"/>     
                    <?php } ?>    
               </div>
                    
                        
                <div class="form-section">
                    <label for="email">Email:</Label>
                    <?php
                    if(!$emailOk){ ?>
                        <input id="email" type="text"  name="email" placeholder="Enter your email">
                        <p class="rojo">El email tiene que seguir el formato hola@ejemplo.com</p>
                    <?php } else{ ?>
                        <input id="email" type="text"  name="email" value="<?php echo $email ?>" placeholder="Enter your email"/>
                    <?php } ?>
                </div>    
                    
                        
                <div class="form-section">
                    <label for="dateofbirth">Date of Birth:</Label>
                    <?php
                    if(!$dateOk){ ?>
                        <input id="dateofbirth" type="date" name="dateofbirth" placeholder="Enter your date of birth">
                        <p class="rojo">No has introducido una fecha válida</p>
                    <?php }else{ ?>
                        <input id="dateofbirth" type="date" name="dateofbirth" value="<?php echo $date ?>" placeholder="Enter your date of birth"> 
                    <?php } ?>
                </div>
                    
                        
                  <div class="form-section">
                    <label for="telephone">Telefono Móvil:</Label> 
                    <?php 
                    if(!$telOk){ ?>
                        <input id="telephone" type="tel" name="tel" placeholder="Enter your telephone"> 
                        <p class="rojo">El teléfono introducido no es válido</p>
                    <?php } else{ ?>
                        <input id="telephone" type="tel" name="tel" value="<?php echo $tel ?>"placeholder="Enter your telephone">
                <?php } ?>
                  </div>         
                    
                
                <div class="form-section">
                    <label for="shop">Closest Shop:</Label>
                    <?php
                    if(!$shopOk){ ?>
                        <select id="shop" name="shop">
                                <option value="Madrid">Madrid</option>
                                <option value="Barcelona">Barcelona</option>
                                <option value="Valencia">Valencia</option>
                        </select> 
                    <p>No has seleccionado ninguna tienda</p>
                    
                    <?php }else{ ?>
                    <select id="shop" name="shop">
                                <option value="Madrid"<?php 
                                    if($shop == "Madrid"){
                                        echo "selected";
                                        
                                    } ?>
                                        
                                >Madrid</option>
                                <option value="Barcelona"<?php 
                                    if($shop == "Barcelona"){
                                        echo "selected";
                                        
                                    } ?>    
                                        
                                >Barcelona</option>
                                <option value="Valencia"<?php 
                                    if($shop == "Valencia"){
                                        echo "selected";
                                        
                                    } ?>   
                                        
                                >Valencia</option>
                    </select> 
                    
                    <?php } ?>
                </div>
                <div class="form-section">
                    <?php
                    if(!$ageOk){ ?>
                         <div class="form-section">
                            <label>Age:</label>
                            <div class="select-section">
                                <div>
                                    <input id="-25" type="radio" name="age" value="-25" /> 
                                    <label for="-25">Younger than 25</label>
                                </div>
                                <div>
                                    <input id="25-50" type="radio" name="age" value="25-50" /> 
                                    <label for="25-50">Between 25 and 50</label>
                                </div>
                                <div>
                                    <input id="50-" type="radio" name="age" value="50-" />
                                    <label for="50-">Older than 50</label>
                                </div>
                            </div>
                            <p class="rojo">No has seleccionado la edad</p>

                        </div>
                    
                    <?php }else{ ?>
                       <div class="form-section">
                            <label>Age:</label>
                            <div class="select-section">
                                <div>
                                    <input id="-25" type="radio" name="age" value="-25" <?php 
                                        if($age == "-25"){
                                            echo "checked";
                                        } ?>/> 
                                    <label for="-25">Younger than 25</label>
                                    
                                </div>
                                <div>
                                    <input id="25-50" type="radio" name="age" value="25-50" <?php 
                                            if($age == "25-50"){
                                                echo "checked";
                                            } ?>/> 
                                    <label for="25-50">Between 25 and 50</label>
                                        
                                </div>
                                <div>
                                    <input id="50-" type="radio" name="age" value="50-" <?php 
                                            if($age == "50-"){
                                                echo "checked";
                                            } ?>/>
                                    <label for="50-">Older than 50</label>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    <div class="form-section">
                            <label for="subscription">Newsletter subscription:</label>
                            <input id="subscription" type="checkbox" <?php 
                                            if($subscription){
                                                echo "checked";
                                            } ?> name="subscription"/> 
                    </div>
                    <div class="form-section">
                            <div class="submit-section">
                                <input class="submit" type="submit" 
                                       value="Send" name="sendbutton" /> 
                            </div>
                    </div>
                </div> 
            </div>       
        </form>  
       </div>
   </body>
</html>
<?php } ?>  