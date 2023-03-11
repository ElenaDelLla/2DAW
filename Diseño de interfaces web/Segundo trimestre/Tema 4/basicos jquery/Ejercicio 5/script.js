$(document).ready(() => {
    let imagenUno = true;
    $("#imagen").click(() => {
        if(imagenUno){
            $("img").slideUp(3000);
            imagenUno = false;
            $("button").text("Ver imagen 2");
        }else{
            $("img").attr("src", "flor2.png");
            $("img").slideDown(3000);
        }
    });
});