const $botonAviso = $(verAviso);

$(document).ready (() => {
    $botonAviso.click (() => {
        $(".mensaje").slideUp(2000, ()=>{
            $(".mensaje").html("Bebe agua <br> Haz deporte");
            $botonAviso.text("Atención");
            $(".mensaje").slideDown(2000); //slideToggle(2000), slideDown(2000);
            $(".mensaje").css("color", "blue");
        }); 
        $(".mensaje").css("color", "red");
        

    });
});